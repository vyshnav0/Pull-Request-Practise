
---

## **Step-by-Step Guide to Making Your First Pull Request**

### **Step 1: Fork the Repository**
1. **Go to the GitHub repository** for this project.
2. **Click on the "Fork" button** in the top-right corner of the page.
3. **GitHub will create a copy** of the repository in your GitHub account. This is your own version of the project where you can freely make changes.

### **Step 2: Clone the Repository to Your Local Machine**
1. **Click on the "Code" button** on your forked repository's page.
2. Copy the URL provided (make sure it's the HTTPS one).
3. Open your terminal or command prompt.
4. Type the following command to clone the repository:
   ```bash
   git clone <URL you copied>
   ```
5. **Navigate to the project folder** using:
   ```bash
   cd <repository-name>
   ```

### **Step 3: Create a New Branch**
1. Before making any changes, **create a new branch** to keep your changes separate from the main branch.
2. Type the following command to create and switch to a new branch:
   ```bash
   git checkout -b your-branch-name
   ```
   *Replace `your-branch-name` with a name that describes your changes, e.g., `add-name`.*

### **Step 4: Make Your Changes**
1. **Open the project folder** in your preferred code editor.
2. **Find the list of users** in the `index.html` file.
3. **Add your name and GitHub ID to the list:
   ```html
   <li><a href="https://github.com/your-username">Your Name</a></li>
   ```
4. **Save your changes.**

### **Step 5: Commit Your Changes**
1. Go back to your terminal.
2. **Check the status** of your changes:
   ```bash
   git status
   ```
3. **Add your changes** to the staging area:
   ```bash
   git add .
   ```
4. **Commit your changes** with a meaningful message:
   ```bash
   git commit -m "Added (your name) to the list of contributors"
   ```

### **Step 6: Push Your Changes to GitHub**
1. Push your changes to the branch you created earlier:
   ```bash
   git push origin your-branch-name
   ```

### **Step 7: Create a Pull Request**
1. **Go to your forked repository** on GitHub.
2. **Click on the "Compare & pull request" button** that appears after pushing your changes.
3. **Add a title and description** for your pull request. Describe what changes you’ve made.
4. **Click "Create pull request."**

### **Step 8: Wait for Your Pull Request to Be Reviewed**
1. The project maintainer will review your pull request.
2. They may request changes, approve, or merge your pull request.
3. **If changes are requested**, make them on your local branch, commit, and push them to the same branch. The pull request will automatically update.

### **Step 9: Celebrate!**
1. Once your pull request is merged, you’ve officially contributed to an open source project!
2. **Thank you for contributing!** Feel free to share your experience and keep contributing to more projects.

