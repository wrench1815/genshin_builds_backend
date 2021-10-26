import React from "react";
import PropTypes from "prop-types";
import { Editor as Tinymce } from "@tinymce/tinymce-react";
import styled from "styled-components";

const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 200px;
    > div {
      min-height: 200px;
    }
  }
`;

const Editor = ({ onChange, name, value }) => {
  return (
    <>
      <Wrapper>
        <Tinymce
          tinymceScriptSrc={
            strapi.backendURL + "/tinymce/js/tinymce/tinymce.min.js"
          }
          value={value}
          init={{
            height: 500,
            menubar: false,
            toolbar_sticky: true,
            convert_urls: false,
            relative_urls: true,
            remove_script_host: true,
            forced_root_block: "div",
            toolbar_mode: "wrap",
            image_advtab: true,
            image_class_list: [
              { title: "None", value: "" },
              { title: "Responsive", value: "img-fluid" },
            ],
            block_formats:
              "Div=div;Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;Preformatted=pre",
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
              "media codesample fullscreen",
              "hr visualchars imagetools emoticons",
            ],
            toolbar:
              "undo redo | formatselect forecolor backcolor | \
              bold italic underline strikethrough removeformat | \
              alignleft aligncenter alignright alignjustify | \
              outdent indent | numlist bullist | \
              link anchor | image media charmap emoticons | \
              fullscreen code",
          }}
          onEditorChange={(content, editor) => {
            onChange({ target: { name, value: content } });
          }}
        />
      </Wrapper>
    </>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Editor;
