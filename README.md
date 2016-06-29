# BigPanda DevOps Exercise
#### INTRO
Good morning, Mr. Panda. Your mission, should you choose to accept it, involves the development and deployment of two nanoservices.

#### Get your environment ready
You'll need a linux machine with the ability to run vms.

1. Install Ansible (Any version above 1.8 and below 2.0 should be fine).
1. Install Vagrant.
1. Install VirtualBox.
1. Clone this git repo, run `vagrant up base` and make sure you can ssh into the machine using `vagrant ssh base`.
1. Inside the vm execute `nodejs /tmp/bamboo/bamboo.js`.
1. Go to your browser, go to http://localhost:8080, you should get some information about how much we love bamboo.

#### Ready for action?
Great.  
Your project is simple, as a DevOps panda you need to have the ability to develop nanoservices and create a mechanism for deploying them.  
Below, you can find the description of your tasks.

###### NodeJS/Python services
Create two basic NodeJs/Python services, the first is panda-service which should serve static files from a directory called `resources`. The directory should contain two files, small.png and medium.png. You may use any image that you like, as long as there is a panda over there.  
The second service shall be called big-service, and should just maintain a counter of the amount of GET requests it served, and return it on every GET request it gets.
A sample NodeJS service named bamboo-app already exists  [here](roles/bamboo/files/bamboo-app)

###### Deployment
Create an ansible role for each of the services. The role should install the service and make sure it's ready to be used in **production**.  
A sample role for bamboo-app already exists for your convenience.  (Please note: samples are not full, and do not contain all relevant the details, you're expected to improve them, and add missing tasks).
We understand there might be a short service downtime when re-deploying a service, that’s fine.

###### Wrapper
Create a simple utility for deploying both services. Your utility should support deploying a single service, or all of them.  
**BONUS**: If you find this exercise super simple, adding the ability to update just a single image in the panda-service would be gladly accepted.

#### Deliverables
A GitHub Pull-Request to this project, containing:

1. The code for both big-service and panda-service.
1. Ansible roles which takes care of provisioning both services.
1. Modified panda.yml which install ONLY the newly written service on the base VM.
1. A wrapper script on top of ansible-playbook which deploys the latest version of those services.

The Pull request should describe the exact way of using your wrapper script (if it doesn't contain a meaningful help function), a short description of the roles you created, and any other comment you’d like us to know of.

#### General guidelines
Your code should be as simple as possible, yet well documented and robust.  
Spend some time on designing your solution. Think about operational use cases (what happens if the service crashes for an example).

#### Issues?
contact: ofer@bigpanda.io
