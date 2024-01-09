<script setup>
    import { ref } from 'vue';
    import { Form, Field, CellGroup } from 'vant';
    // import Editor from '@tinymce/tinymce-vue';

    const editorContent = ref('');
    const articleTitle = ref('');
    const articleId = ref('');
    const onSubmit = (values) => {
      console.log('submit', values);
      console.log(editorContent.value);

      localStorage.setItem('editorContent', editorContent.value)

    };
    // const editorConfig = {
    //     // TinyMCE 配置项
    //     // 例如：
    //     height: 300,
    //     menubar: false,
    //     tinycomments_mode: 'embedded',
    //     plugins: [
    //       'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
    //       'searchreplace', 'wordcount', 'visualblocks', 'visualchars', 'code', 'fullscreen', 'insertdatetime',
    //       'media', 'table', 'emoticons', 'template', 'help'
    //     ],
    //     menu: {
    //       favs: { title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons' }
    //     },
    //     toolbar: 'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons',
    // };

    const defaults = {
      language: 'zh_CN',
      toolbar_mode: 'wrap',
      // toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
      // toolbar: [
        //   { name: 'history', items: [ 'undo', 'redo' ] },
        //   { name: 'styles', items: [ 'styles' ] },
        //   { name: 'formatting', items: [ 'bold', 'italic' ] },
        //   { name: 'alignment', items: [ 'alignleft', 'aligncenter', 'alignright', 'alignjustify' ] },
        //   { name: 'indentation', items: [ 'outdent', 'indent' ] }
        // ],
      // plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
      toolbar: [
        { name: 'history', items: [ 'undo', 'redo' ,'blocks', 'fontsize'] },
        // { name: 'alignment', items: [ 'alignleft', 'aligncenter', 'alignright', 'alignjustify' ] },
        { name: 'formatting', items: [ 'bold', 'italic', 'underline', 'strikethrough', 'alignleft', 'aligncenter', 'alignright', 'alignjustify' ] },
        { name: 'indentation', items: ['checklist', 'bullist', 'numlist', 'outdent', 'indent' ] },
        { name: 'media', items: [ 'blockquote', 'code', 'link', 'image', 'table' ] },
      ],
      // toolbar_groups: {
      //   formatting: {
      //     icon: 'bold',
      //     tooltip: 'Formatting',
      //     items: 'bold italic underline | superscript subscript'
      //   }
      // },
      // tinycomments_mode: 'embedded',
      // tinycomments_author: 'Author name',
      // menu: {
      //   favs: { title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons' }
      // },
      // mergetags_list: [
      //   { value: 'First.Name', title: 'First Name' },
      //   { value: 'Email', title: 'Email' },
      // ],
      init_instance_callback: editor => {
          // 在编辑器初始化完成后设置内容
          editor.setContent('初始化内容');
      },
      // plugins: 'save',
      // toolbar: 'save',
      save_onsavecallback: (data) => {
        console.log('Saved');
        console.log(data);
      },
      mobile: {
        menubar: true,
      },
      toolbar_location: 'bottom',
    }
</script>

<template>
  <div>
    <!-- 移动端 -->
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="articleTitle"
          name="articleTitle"
          label="标题"
          placeholder="请填写标题"
          autocomplete="off"
          :colon="true"
          :rules="[{ required: true, message: '请填写标题' }]"
        />
      </van-cell-group>
      <!-- <Editor
        id="editor"
        v-model="editorContent"
        api-key="0m2vgcii57b1j8ts98yqpgvkzvdf2ek6p7q6noy0h5h6ali7"
        :init="defaults"
      /> -->
      <div class="btn-row">
          <van-button type="default">取消</van-button>
          <van-button type="primary" native-type="submit">提交</van-button>
      </div>
    </van-form>

    <div v-html="editorContent">
    </div>
  </div>
</template>

<style scoped>
.van-cell-group--inset{
  margin: 0;
}
.btn-row{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  margin: 16px auto;
}
</style>