Firstly i have created 3 folders in git using my gitbash locally
Then i used git init where we need to initilize the git 
git status we need to check any pending status are there at locally we are missed
git add index.xml and js file using the command git add.
git commit -m "INitalize start" we are commiting this files need to add in github
we need to create a repo in GIT Hub then we need to sign up into the git hub and create repository
after creating our "My-first-devops-repo" need to add the this repo into local
git remote add origin url
then we successfully added our url need to push origin into git hub
so today we have completed how to add files in git locally to git hub
################################################################################################################
We have created Feature branch in main branch file
command to create is "git checkout -b feature/login"
then we can add any files like i added newnewfile.html same like that..
then git add . same like previous
git commit -m "Next content"
git pull → Fetch changes from a remote repository and merge them into your current branch.
origin → The name of the remote repository (usually GitHub).
main → The branch on the remote repository you want to pull from.
git checkout feature/login
git pull origin main
git push origin feature/login
git checkout main
git merge feature/login


###################################################################################################################
Other useful commands
Undo / Revert Changes
git checkout -- <file> → Undo local changes
git reset HEAD <file> → Unstage a file
git revert <commit> → Reverse a commit safel
Undo / Revert Changes
git checkout -- <file> → Undo local changes
git reset HEAD <file> → Unstage a file
git revert <commit> → Reverse a commit safel
$###################
Rebasing

Clean up history before merging

git rebase main
