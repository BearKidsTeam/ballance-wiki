# Ballance wiki repository
The repository for Ballance.  
*Test version*  

## Summary
This repository's aim is that make more people knowing Ballance and its knowlwdge.  
This repository have 2 branches. **master** is core repository and **gh-pages** is Github Page branch.  
This wiki use Gitbook.

## Contribution
### Prepare for development
First, please fork this repository\(Except BKT's members\). Then, clone it and set it up by below commands.  

```
cd ./ballance-wiki

# If you don't install gitbook-cli, run these
npm install -g gitbook-cli
gitbook -V

# Add essential extension
gitbook install
```

### Modify
If you know how to use Gitbook totally, please ignore this chapter. Modify what you want to modify.  
For beginner, you should learn Markdown grammer. It's so easy that you can learn it quickly. Then, enter your language's folder and modify files which are existed in SUMMARY.md. Also, if you have any problem about it. Asking Gitbook's professor is OK.

**WARNING**  
Don't use visual Gitbook editor! It might cause some messy issues. I suggest that you should use Visual Studio Code or Atom.

### Submit
Please submit your change in your own forked repository. And make a Pull Request in original repository. The submit, which is directly submitted by people, who is not BKT's members, will be reset. We only accept PR.  
We deploy a work on travis-ci to deploy gh-page automatically. We only merge your branch to master.

> This method request that you should have a Github account. Considering the real situation, if you modify some files but don't have Github account and even don't know how to use commander or Git, You can contact the people who have Github account and delegate them to upload your change.