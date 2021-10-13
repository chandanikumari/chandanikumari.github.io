#installing Xcode & Related Tools
xcode-select --install
#install homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
#install additional librairies for databases
brew install postgres rbenv
#to start postgresql:
brew services start postgresql
#install nvm
brew install nvm
#append to ~/.zshrc file
export NVM_DIR="$HOME/.nvm"
[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
[ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
#install node using nvm
nvm install 15
#install rbenv & ruby
brew install rbenv
rbenv install 2.6.6
#initialize RBenv by typing: 
rbenv init
#append rbenv init output to ~/.zshrc file
#set Ruby installation global
rbenv global 2.6.6
#Install the bundler tool 
gem install bundler:1.16.1


# Configure GitHub
git config --global user.email '16663673+chandanikumari@users.noreply.github.com'
git config --global user.name 'Chandani Kumari'
#Configuring a New SSH Key and Add Your Public Key to GitHub
eval `ssh-agent -s`
ssh-keygen -t rsa -C "16663673+chandanikumari@users.noreply.github.com" # go with the default settings
#Add your new key to the ssh-agent
ssh-add ~/.ssh/id_rsa
# Take output of below command and add in github->account settings->SSH keys->add SSh key
cat ~/.ssh/id_rsa.pub

