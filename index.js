function createPost() {
  const pageTemplate = document.getElementById('page-template').innerHTML
  const postTemplate = document.getElementById('post-template').innerHTML
  const commentsTemplate = document.getElementById('comments-template').innerHTML

  const pageTemplateFn = _.template(pageTemplate)
  const postTemplateFn = _.template(postTemplate)
  const commentsTemplateFn = _.template(commentsTemplate)

  const tilte = document.getElementById('postTitle').value
  const body = document.getElementById('postBody').value
  const author = document.getElementById('postAuthor').value

  const postDiv = document.getElementById('post')
  const pageTemplateHTML = pageTemplateFn({ 'title': title, 'body': body: body, 'author': author })

  postDiv.innerHTML += pageTemplateHTML
}

function postComment() {
  const commenter = document.getElementById('commenterName').value
  const comment = document.getElementById('commentText').value
  const commentTemplate = document.getElementById('comment-template').innerHTML
  const commentTemplateFn = _.template(commentTemplate)
  const commentsDiv = document.getElementById('comments')
  const commentTemplateHTML = commentTemplateFn({'comment': comment, 'commenter': commenter})
  commentsDiv.innerHTML += commentTemplateHTML
}
