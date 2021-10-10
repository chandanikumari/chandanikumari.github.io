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



