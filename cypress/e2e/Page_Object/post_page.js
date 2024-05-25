export class PostPage {

    navigateToPosts() {
      cy.wait(100);
      cy.get('[data-test-nav="posts"]').click();
    }

    createNewPost(title_post, body_post) {
      cy.wait(100);
      cy.contains("New post").click();
      if (title_post.length > 0) {
        cy.get('[id^=ember]').find('textarea').type (title_post,{ parseSpecialCharSequences: false });
        cy.wait(500);
      }
      if (body_post.length > 0) {
        cy.get('[class="kg-prose"]').type (body_post,{ parseSpecialCharSequences: false });
        cy.wait(800);
      }
      
      //cy.get('[id^=ember]').find('textarea').type(title_post);
      //cy.wait(500);
      //cy.get('[class="kg-prose"]').type(body_post);
      //cy.wait(800);
      
      }
  
    publishPost() {
      cy.contains('Publish').click();
      cy.wait(800);
      cy.contains('Post');
      cy.contains('Continue, final review').click();
      cy.contains('Publish & send, right now').click();
      cy.wait(20000);
      
    }
  
    verifyPost(title_post) {
      cy.contains('Back to dashboard').click();
      cy.contains('Post').click();
      cy.get('[id^=ember]')
        .find('.gh-content-entry-title')
        .should('contain',title_post);
      
    }

    selectPost(title_post) {
      cy.contains(title_post).click({force: true});
    }
  
    editPost(title_post_nuevo, content_post_nuevo ) {

      if (title_post_nuevo.length > 0) {
        cy.get('[id^=ember]').find('textarea').clear().type (title_post_nuevo,{ parseSpecialCharSequences: false });
        cy.wait(500);
      }

      else {
        cy.get('[id^=ember]').find('textarea').clear();

      }

      if (content_post_nuevo.length > 0) {
        cy.get("p").clear().type (content_post_nuevo,{ parseSpecialCharSequences: false });
        cy.wait(800);
      }

    else {
      cy.get("p").clear();

    }
    }

    updatePost() {
      cy.contains('Update').click();
      cy.wait(500);
      cy.contains('Posts').click();
    }

    verifyPostlist(title_post) {
      cy.get('[id^=ember]').find('.gh-content-entry-title').should('contain',title_post);
      
    }

    deletePost(title_post) {
      cy.contains(title_post).rightclick();
      cy.contains('Delete').click();
      cy.wait(1000);
      cy.get('[data-test-task-button-state="idle"]').click();
      cy.contains('Posts').click();
    }

    verifyPostNotPresent(title_post) {
      cy.wait(5000);
      cy.get('[id^=ember]')
        .find('.gh-content-entry-title')
        .should('not.contain', title_post);
    }

    addTagToPost(title_post, title_tag) {
      cy.get('[data-test-nav="posts"]').click();
      cy.contains(title_post).rightclick();
      cy.contains('Add a tag').click();
      cy.wait(200);
      cy.get('.ember-power-select-status-icon').click();
      cy.contains(title_tag).click();
      cy.get('.modal-content').click();
      cy.get('[data-test-task-button-state="idle"]').click();
  
    }
  
    verifyTagInPost(title_tag) {
      cy.wait(1000);
      cy.get('.settings-menu-toggle > span').click();
      cy.contains(title_tag).should('contain', title_tag);

    }

    duplicatePost(title_post) {
      cy.contains(title_post).rightclick();
      cy.contains('Duplicate').click();

    }

    changeAccessToPost(title_post, access) {
      cy.contains(title_post).rightclick();
      cy.contains('Change access').click();
      cy.wait(200);
      cy.get('[data-test-select="post-visibility"]').select(access);
      cy.get('.modal-content').click();
      cy.contains('Save').click();
    }
}