document.addEventListener('DOMContentLoaded', function() {

    // Use buttons to toggle between views
    document.querySelector('#inbox').addEventListener('click', () => load_mailbox('inbox'));
    document.querySelector('#sent').addEventListener('click', () => load_mailbox('sent'));
    document.querySelector('#archived').addEventListener('click', () => load_mailbox('archive'));
    document.querySelector('#compose').addEventListener('click', compose_email);


    const recipients = document.querySelector('#compose-recipients');
    const subject = document.querySelector('#compose-subject');
    const body = document.querySelector('#compose-body');
    const submit = document.querySelector('#submit');

    submit.disabled = true;

    recipients.onkeyup = () => {
      if (recipients.value.length > 0) {
        submit.disabled = false;
      }
      else {
        submit.disabled = true;
      }
    }

    document.querySelector('form').onsubmit = () => {

      new_recipients = recipients.value;
      new_subject = subject.value;
      new_body = body.value;

      fetch('/emails', {
        method: 'POST',
        body: JSON.stringify({
          recipients: 'new_recipients',
          subject: 'new_subject',
          body: 'new_body'
        })
      })
      .then(response => response.json())
      .then(result => {
        console.log(result);
      });
    }




    // By default, load the inbox
    load_mailbox('inbox');
  });


  function compose_email() {

    // Show compose view and hide other views
    document.querySelector('#emails-view').style.display = 'none';
    document.querySelector('#compose-view').style.display = 'block';

    // Clear out composition fields
    document.querySelector('#compose-recipients').value = '';
    document.querySelector('#compose-subject').value = '';
    document.querySelector('#compose-body').value = '';
  }

  function load_mailbox(mailbox) {

    // Show the mailbox and hide other views
    document.querySelector('#emails-view').style.display = 'block';
    document.querySelector('#compose-view').style.display = 'none';

    // Show the mailbox name
    document.querySelector('#emails-view').innerHTML = `<h3>${mailbox.charAt(0).toUpperCase() + mailbox.slice(1)}</h3>`;
  }

