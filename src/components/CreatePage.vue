<template>
    <form action="" class="container mb-3">
      <div class="row">
        <div class="col-md-8">
            <div class="mb-3">
                <label for="" class="form-label">
                    Page Title
                </label>
                  <!-- Sets a two way binding between the input element and whatever we specify as the v-model -->
                <input 
                    type="text" 
                    class="form-control"
                    v-model="pageTitle"
                />
            </div>
            <div class="mb-3">
                <label for="" class="form-label">
                    Content
                </label>
                <textarea 
                    type="text" 
                    class="form-control" 
                    rows="5"
                    v-model="content"
                ></textarea>
            </div>
        </div>
            
        <div class="col">
            <div class="mb-3">
                <label for="" class="form-label">
                    Link Text
                </label>
                <input 
                    type="text" 
                    class="form-control"
                    v-model="LinkText"
                />
            </div>
            <div class="mb-3">
                <label for="" class="form-label">
                  Link URL
                </label>
                <input 
                    type="text" 
                    class="form-control"
                    v-model="LinkUrl"
                />
            </div>
            <div class="row mb-3">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model="published">
                    <label class="form-check-label" for="gridCheck1">
                    Published
                    </label>
                </div>
            </div>
          </div>
          <div class="mb-3">
              <button 
                  class="btn btn-primary"
                  :disabled="isFormInvalid"
                  @click.prevent="submitForm"
              >Create Page</button>
          </div>
      </div>
    </form>

</template>
<script>

export default {
    emits: {
      pageCreated(pageTitle, content, link, published) {
        if (!pageTitle) {
          return false
        }

        if(!content) {
          return false
        }

        if(!link || !link.text || !link.url) {
          return false
        }

        return true
      } 
    },
    computed: {
      isFormInvalid() {
        return !this.pageTitle || !this.content || !this.LinkText || !this.LinkUrl;
      }
    },
    data() {
      return {
        pageTitle: '',
        content: '',
        LinkText: '',
        LinkUrl: '',
        published: true
      }
    },
    methods: {
      submitForm() {
        if(!this.pageTitle || !this.content || !this.LinkText || !this.LinkUrl) {
          alert('Please fill out form')
          return
        }

        // $ (public property)
        // emitting a page passing the first arg which is the name of the event that we want to emit and that will emit that event
        // second argument is passing the object that is created when event is handled
        this.$emit('pageCreated', {
          pageTitle: this.pageTitle,
          content: this.content,
          link: {
            text: this.LinkText,
            url: this.LinkUrl
          },
          published: this.published
        })

        this.pageTitle = '',
        this.content = '',
        this.LinkText = '',
        this.LinkUrl = '',
        this.published = true
      }
    },
    watch: {
      pageTitle(newTitle, oldTitle) {
        if (this.LinkText === oldTitle) {
          this.LinkText = newTitle;
        }
      }
    }
}


</script>