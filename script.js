alert("Hey!");
  const blockedIps = ["45.42.141.26","45.42.141.20","70.237.101.234","207.5.15.197","45.42.141.124","192.166.203.89","158.51.113.60","98.148.39.199","158.51.113.95","75.167.15.56","206.206.96.51","38.107.80.154","103.68.45.13","96.250.164.170","45.42.141.34","45.42.141.45","45.42.141.113","45.42.141.221","45.42.141.252","45.42.141.184","45.42.141.206","45.42.141.139","158.51.113.95","45.42.141.200","45.42.141.34","45.42.141.45","45.42.141.113","45.42.141.221","45.42.141.252","45.42.141.184","45.42.141.206","45.42.141.139","71.8.110.175","45.42.141.206","45.42.141.139","45.42.141.200","158.51.113.55","45.42.141.215","158.51.113.95","108.12.21.151","45.42.141.213","45.42.141.54","131.93.253.138","45.42.141.213","47.149.89.196","45.42.141.215","158.51.113.47","158.51.113.101","45.42.141.54","45.42.141.199","45.42.141.203","45.42.141.58","74.108.102.22","74.51.18.101","68.163.45.110","45.42.141.70","45.42.141.39","45.42.141.78","45.42.141.74","45.42.141.46","45.42.141.75","158.51.113.37","70.112.62.201","45.42.141.150","70.237.101.234","45.42.141.117","45.42.141.227","96.232.176.155","45.42.141.220","45.42.141.83","158.51.113.55","45.42.141.200","45.42.141.34","45.42.141.45","45.42.141.113","45.42.141.221","45.42.141.252","45.42.141.184","45.42.141.117","45.42.141.227","96.232.176.155","45.42.141.220","45.42.141.83","158.51.113.55","45.42.141.200","45.42.141.34","45.42.141.45","45.42.141.113","45.42.141.221","45.42.141.252","45.42.141.184","45.42.141.109","45.42.141.219","45.42.141.164","24.93.231.106","45.42.141.96","45.42.141.39","45.42.141.78","45.42.141.74","45.42.141.46","45.42.141.75","158.51.113.37","70.112.62.201","45.42.141.150","70.237.101.234","45.42.141.210","158.51.113.63","45.42.141.138","45.42.141.132","45.42.141.131","45.42.141.197","45.42.141.245","45.42.141.229","45.42.141.34","45.42.141.199","45.42.141.203","45.42.141.58","74.108.102.22","74.51.18.101","68.163.45.110","158.51.113.96","173.68.185.162","45.42.141.151","45.42.141.248","45.42.141.135","45.42.141.215","45.42.141.206","45.42.141.139","158.51.113.41","45.42.141.210","45.42.141.3","45.42.141.149","158.51.113.128","45.42.141.117","45.42.141.227","96.232.176.155","45.42.141.220","45.42.141.83","158.51.113.55""45.42.141.200","45.42.141.34","45.42.141.45","45.42.141.113","45.42.141.221","45.42.141.252","45.42.141.184","158.51.113.86","45.42.141.246","158.51.113.62","45.42.141.25","45.42.141.137","158.51.113.52","158.51.113.112","45.42.141.88","45.42.141.132","45.42.141.131","45.42.141.197","45.42.141.245","45.42.141.229","45.42.141.34","45.42.141.199","45.42.141.203""45.42.141.58","74.108.102.22","74.51.18.101","68.163.45.110","70.237.101.233","45.42.141.248","45.42.141.149","158.51.113.128","45.42.141.117","45.42.141.227","96.232.176.155","45.42.141.220","45.42.141.83","158.51.113.55","45.42.141.200","45.42.141.34","45.42.141.45","45.42.141.113","45.42.141.221","45.42.141.252","45.42.141.184","45.42.141.56","107.126.28.60","98.19.76.198","45.42.141.205","45.42.141.223","45.42.141.95","45.42.141.162","158.51.113.82","45.42.141.30","45.42.141.205","45.42.141.223","172.59.16.91","45.42.141.70","45.42.141.58","45.42.141.13","45.42.141.248","45.42.141.149","158.51.113.128","45.42.141.117","45.42.141.227","96.232.176.155","45.42.141.220","45.42.141.83","158.51.113.55","45.42.141.200","45.42.141.34","45.42.141.45","45.42.141.113","45.42.141.221","45.42.141.252","45.42.141.184","184.4.66.163","100.11.71.186","99.93.63.174","68.50.96.44","148.66.172.178","158.51.113.49","162.83.194.41","45.42.141.186","45.42.141.15","45.42.141.67","45.42.141.159","45.42.141.164","35.147.100.15","68.36.87.68","49.43.99.102","107.115.165.38","97.106.134.169","75.82.124.36","69.226.246.68","72.223.71.214","87.201.97.18","172.241.164.18","78.30.2.79","136.28.103.141","174.207.166.124","107.10.225.124","174.207.40.126","158.51.113.163","158.51.113.240","45.42.141.104","45.42.141.151","158.51.113.201","45.42.141.88","158.51.113.103","45.42.141.70","45.42.141.58","45.42.141.13","45.42.141.248","45.42.141.149","158.51.113.128","45.42.141.117","45.42.141.227","96.232.176.155","45.42.141.220","45.42.141.83","158.51.113.55","45.42.141.200","45.42.141.34","45.42.141.45","45.42.141.113","45.42.141.221","45.42.141.252","45.42.141.184","100.33.12.53","158.51.113.78","158.51.113.242","158.51.113.240","45.42.141.104","45.42.141.151","158.51.113.201","45.42.141.88","158.51.113.103""45.42.141.70","45.42.141.58","45.42.141.13","45.42.141.248","45.42.141.149","158.51.113.128","45.42.141.117","45.42.141.227","96.232.176.155","45.42.141.220","45.42.141.83","158.51.113.55","45.42.141.200","45.42.141.34","45.42.141.45","45.42.141.113","45.42.141.221","45.42.141.252","45.42.141.184","158.51.113.150","158.51.113.135","45.42.141.162","174.211.239.159","216.8.252.36","174.211.227.91","68.36.87.68","35.147.100.15","49.43.99.102","107.115.165.38","97.106.134.169","75.82.124.36","69.226.246.68","72.223.71.214","87.201.97.18","172.241.164.18","78.30.2.79","136.28.103.141","107.10.225.124","174.207.166.124","174.207.40.126","158.51.113.145","158.51.113.78","158.51.113.242","158.51.113.240","45.42.141.104","45.42.141.151","158.51.113.201","45.42.141.88","158.51.113.103","45.42.141.70","45.42.141.58","45.42.141.13","45.42.141.248","45.42.141.149","158.51.113.128","45.42.141.117","45.42.141.227","96.232.176.155","45.42.141.220","45.42.141.83","158.51.113.55","45.42.141.200","45.42.141.34","45.42.141.45","45.42.141.113","45.42.141.221","45.42.141.252","45.42.141.184","45.42.141.166","158.51.113.41","158.51.113.112","158.51.113.76","45.42.141.71","158.51.113.36","45.42.141.109","45.42.141.219","45.42.141.105","158.51.113.45","158.51.113.204","158.51.113.55","45.42.141.35","158.51.113.109","158.51.113.56","45.42.141.96","45.42.141.39","45.42.141.78","45.42.141.74","45.42.141.46","45.42.141.75","158.51.113.37","70.112.62.201","45.42.141.150","70.237.101.234","158.51.113.11","45.42.141.67","45.42.141.159","45.42.141.164","24.168.87.178","45.42.141.158","158.51.113.252","45.42.141.105","158.51.113.45","158.51.113.204","158.51.113.55","45.42.141.35","158.51.113.109","158.51.113.56","45.42.141.96","45.42.141.39","45.42.141.78","45.42.141.74","45.42.141.46","45.42.141.75","158.51.113.37","70.112.62.201","45.42.141.150","70.237.101.234","158.51.113.253","158.51.113.152","158.51.113.196","158.51.113.142","158.51.113.182","158.51.113.52","45.42.141.147","158.51.113.23","158.51.113.121","45.42.141.122","192.9.143.246","158.51.113.236","45.42.141.15","45.42.141.160","158.51.113.145","158.51.113.78","158.51.113.242","158.51.113.240","45.42.141.104","45.42.141.151","158.51.113.201","45.42.141.88","158.51.113.103","45.42.141.70","45.42.141.58","45.42.141.13","45.42.141.248","45.42.141.149","158.51.113.128","45.42.141.117","45.42.141.227","96.232.176.155","45.42.141.220","45.42.141.83","158.51.113.55","45.42.141.200","45.42.141.34","45.42.141.45","45.42.141.113","45.42.141.221","45.42.141.252","45.42.141.184","158.51.113.217","45.42.141.158","158.51.113.252","45.42.141.105","158.51.113.45","158.51.113.204","158.51.113.55","45.42.141.35","158.51.113.109","158.51.113.56","45.42.141.96","45.42.141.39","45.42.141.78","45.42.141.74","45.42.141.46","45.42.141.75","158.51.113.37","70.112.62.201","45.42.141.150","70.237.101.234","158.51.113.148","158.51.113.58","158.51.113.34","158.51.113.81","158.51.113.72","158.51.113.155","158.51.113.127","45.42.141.177","45.42.141.56","158.51.113.253","158.51.113.152","158.51.113.196","158.51.113.142","158.51.113.182","158.51.113.52","45.42.141.147","158.51.113.23","158.51.113.121","45.42.141.122","192.9.143.246","158.51.113.236","45.42.141.15","45.42.141.160","158.51.113.145","158.51.113.78","158.51.113.242","158.51.113.240","45.42.141.104","45.42.141.151","158.51.113.201","45.42.141.88","158.51.113.103","45.42.141.70","45.42.141.58","45.42.141.13","45.42.141.248","45.42.141.149","158.51.113.128","45.42.141.117","45.42.141.227","96.232.176.155","45.42.141.220","45.42.141.83","158.51.113.55","45.42.141.200","45.42.141.34","45.42.141.45","45.42.141.113","45.42.141.221","45.42.141.252","45.42.141.184","158.51.113.101","45.42.141.102","100.37.61.58","158.51.113.217","45.42.141.158","158.51.113.252","45.42.141.105","158.51.113.45","158.51.113.204","158.51.113.55","45.42.141.35","158.51.113.109","158.51.113.56","45.42.141.96","45.42.141.39","45.42.141.78","45.42.141.74","45.42.141.46","45.42.141.75","158.51.113.37","70.112.62.201","45.42.141.150","70.237.101.234","158.51.113.56","100.37.61.58","158.51.113.166","158.51.113.130","100.33.14.10","45.42.141.176","158.51.113.33","158.51.113.153","45.42.141.52","45.42.141.210","158.51.113.99","158.51.113.127","45.42.141.177","45.42.141.56","158.51.113.253","158.51.113.152","158.51.113.196","158.51.113.142","158.51.113.182","158.51.113.52","45.42.141.147","158.51.113.23","158.51.113.121","45.42.141.122","192.9.143.246","158.51.113.236","45.42.141.15","45.42.141.160","158.51.113.145","158.51.113.78","158.51.113.242","158.51.113.240","45.42.141.104","45.42.141.151","158.51.113.201","45.42.141.88","158.51.113.103","45.42.141.70","45.42.141.58","45.42.141.13","45.42.141.248","45.42.141.149","158.51.113.128","45.42.141.117","45.42.141.227","96.232.176.155","45.42.141.220","45.42.141.83","158.51.113.55","45.42.141.200","45.42.141.34","45.42.141.45","45.42.141.113","45.42.141.221","45.42.141.252","45.42.141.184","158.51.113.85","64.84.126.175","64.84.127.234","64.84.126.253","64.84.125.55","64.84.127.160","64.84.127.93","64.84.125.234","64.84.127.53","158.51.113.30","158.51.113.196","158.51.113.253","64.84.127.248","64.84.126.175","64.84.127.234","64.84.126.253","64.84.125.55","64.84.124.86","64.84.126.165","108.41.124.139","69.122.207.81","158.51.113.141","158.51.113.154","72.80.118.247","64.84.127.160","64.84.127.93","64.84.126.236","64.84.126.88","64.84.127.248","64.84.126.175","64.84.127.234","64.84.126.253","64.84.125.55","64.84.124.86","64.84.126.165","108.41.124.139","158.51.113.230","64.84.126.169","64.84.126.236","64.84.126.88","64.84.127.248","64.84.126.175"
,"64.84.127.234","64.84.126.253","64.84.125.55","72.183.146.80","98.56.116.169","158.51.113.221","158.51.113.191","158.51.113.141","158.51.113.68","71.251.26.207","158.51.113.218","158.51.113.234","158.51.113.81","158.51.113.186","158.51.113.66","158.51.113.34","158.51.113.195","158.51.113.212","158.51.113.89","158.51.113.169","158.51.113.245","158.51.113.232","158.51.113.101","158.51.113.150","158.51.113.7","158.51.113.111","158.51.113.83","158.51.113.119","158.51.113.243","158.51.113.217","158.51.113.211","158.51.113.190","158.51.113.237","158.51.113.154","158.51.113.230","158.51.113.166","158.51.113.220","158.51.113.131","158.51.113.130","158.51.113.152","45.42.141.117","158.51.113.140","45.42.141.107","158.51.113.194","158.51.113.16","158.51.113.55","96.232.176.156","158.51.113.64","158.51.113.52","45.42.141.52","158.51.113.90","68.98.135.2","158.51.113.149","45.42.141.122","158.51.113.153","108.221.42.93","158.51.113.216","158.51.113.15","158.51.113.137","45.42.141.102","104.244.154.210","207.182.94.190","64.20.147.116","174.169.78.16","96.77.184.78","38.109.252.236","158.51.113.104","158.51.113.137","45.42.141.102","64.20.149.9","130.254.46.34","207.5.39.172","66.128.173.39","158.51.113.236","158.51.113.51","158.51.113.181","158.51.113.139","158.51.113.179","158.51.113.212","136.35.15.102","158.51.113.112","158.51.113.27","130.254.47.16","73.116.101.234","71.167.118.180","207.182.93.57""96.78.100.41","152.86.26.174","64.20.153.224","71.15.66.53","207.5.39.172","66.128.173.39","158.51.113.136","70.237.101.207","158.51.113.155","158.51.113.48","70.237.101.237","70.237.101.208","162.83.234.170","158.51.113.105","158.51.113.151","45.42.141.244","70.23.58.238","108.221.42.82","45.42.141.10","172.56.104.13","96.93.98.206","98.148.39.199","76.110.107.113","67.2.238.232","67.2.235.145","24.145.69.161","65.33.135.233","174.194.0.95","166.196.103.24","108.36.159.156","174.247.12.125","98.97.12.245","98.97.12.245","64.64.116.68","173.239.204.65","166.199.100.92","24.168.87.178","68.60.79.91","75.238.24.146","75.238.192.188","75.238.24.146","98.251.73.79","69.226.246.68","166.199.151.49","162.196.177.14","50.213.226.121","216.7.120.76","103.109.80.61","209.126.77.135","172.56.223.124","174.212.35.120","174.211.231.43","174.211.161.192","174.211.232.86","107.145.190.106","174.234.6.7","73.205.203.135","174.203.2.67","98.197.161.181","174.202.229.113","170.250.202.121","67.247.100.162","69.181.245.40","73.252.177.128","73.252.177.128","166.198.161.69","66.56.34.204","162.192.108.141","172.59.121.220","66.56.34.204","75.19.12.77","174.228.35.222","174.235.215.48","174.215.250.12","174.215.247.12","2.57.222.11","24.168.87.178","70.45.24.104","24.137.235.63","107.123.33.47","73.179.146.135","172.58.181.53","172.59.195.77","47.222.32.40","47.222.37.168","80.41.86.148","172.58.134.138","173.54.144.253","24.168.87.178","70.52.138.175","76.153.171.181","62.83.197.122","72.68.194.109","76.230.86.120","174.218.248.243","23.117.44.83","47.19.134.106","71.88.139.48","24.7.11.144","73.170.83.89","99.169.219.92","166.199.168.80","166.199.168.66","166.199.168.43","172.56.33.213","108.48.13.210","146.70.129.29","172.116.185.82","212.102.33.82","195.181.168.162","212.102.33.164","212.102.33.146","212.102.33.135","212.102.33.156","212.102.33.159","212.102.33.43","77.234.44.190","45.143.82.118","77.234.44.187","212.102.33.164","212.102.33.236","195.181.168.185","94.140.8.77","94.140.8.8","185.216.231.138","212.102.33.237","212.102.33.229","212.102.33.148","156.146.36.92","212.102.33.218","195.181.168.162","212.102.33.73","212.102.33.163","156.146.36.79","212.102.33.210","212.102.33.66","212.102.33.34","212.102.33.70","185.228.19.231","166.199.100.27","63.143.89.213","107.117.176.3","76.251.80.202","199.229.250.245","174.210.231.87","68.60.79.91","193.148.18.52","172.56.208.162","172.56.208.110","172.56.209.224","172.56.209.138","172.56.208.112","172.56.208.199","172.56.168.143","172.56.169.199","172.58.36.74","172.56.168.43","172.59.128.37","24.167.117.190","173.168.241.78","73.155.139.3","98.10.87.14","172.56.33.179","73.61.163.176","73.120.71.23","172.58.150.207","172.56.112.33","172.56.113.184","172.56.113.113","98.175.190.38","108.18.243.114","166.199.168.4","73.15.153.228","98.51.7.245","67.169.70.64","74.15.121.46","142.115.177.196","69.149.36.27","73.56.213.231","107.115.227.99","69.149.36.27","98.209.236.92","104.49.72.71","73.61.163.176","173.54.173.143","173.54.144.253","176.253.223.240","204.229.12.29","66.199.44.249","99.241.207.123","99.76.32.14","94.0.181.176","24.243.2.201","174.87.150.174","47.221.223.192","96.227.254.97","47.221.223.157","166.198.28.88","166.196.61.81","107.120.35.28","67.232.184.47","73.186.233.46","47.226.214.151","66.177.232.117","73.84.193.31","98.7.52.24","45.27.82.53","174.234.19.56","174.234.14.216","174.198.138.139","35.151.46.20","47.151.60.151","47.151.41.4","47.151.32.248","172.56.209.230","174.205.102.49","172.56.209.234","107.127.14.100","99.85.91.53","172.58.251.175","172.58.253.146","181.118.57.157","181.118.37.179","50.73.46.121","174.51.112.158","172.56.78.227","72.238.99.203","172.56.178.180","67.60.51.35","192.30.184.240","172.56.169.206","107.127.18.6","108.147.102.30","184.60.61.122","73.124.51.106","97.150.108.163","72.107.249.136","73.186.233.46","172.59.187.229","187.189.29.171","161.0.155.47","96.255.139.97","174.196.138.242","172.72.163.139","174.209.226.79","174.210.8.103","174.210.11.11","174.210.6.174","172.58.235.157","172.56.37.224","69.112.219.48","45.92.229.168","74.14.4.170","74.14.4.170","74.14.4.170","74.14.4.170","74.14.4.170","172.59.197.124","172.58.180.238","172.59.192.165","172.58.182.168","172.59.192.143","172.59.196.48","172.58.180.56","172.59.195.102","162.226.253.59","172.56.33.244","172.58.190.144","172.56.113.92","172.56.113.180","172.56.193.26","172.56.112.85","47.38.162.26","174.246.132.114","174.197.67.10","35.150.15.27","68.185.220.211","174.246.128.173","35.150.29.188","73.211.114.55","173.42.70.3","73.211.114.55","136.57.9.224","172.58.134.244","174.254.51.91","174.254.54.229","174.254.55.166","174.195.32.96","174.209.196.188","174.249.181.145","174.249.181.160","174.209.195.219","174.197.200.249","174.197.205.101","176.253.223.240","47.18.16.20","172.56.64.137","172.58.1.248","172.56.64.227","172.56.68.32","172.56.67.2","172.56.71.136","172.56.66.16","166.198.250.120","97.105.188.18","89.187.177.74","89.187.177.74","172.56.195.219","172.56.193.39","73.38.126.32","172.56.96.196","172.56.97.202","172.56.194.41","199.119.243.21","107.116.98.56","152.86.145.244","107.122.241.74","75.183.128.56","73.128.91.197""174.160.190.207","172.56.169.156","174.160.190.21","98.51.12.131","98.51.13.187","172.56.168.145","73.2.118.57","172.56.168.89","172.56.168.232","172.56.169.96","172.56.169.136","172.58.38.158","172.58.36.224","98.195.206.143","107.122.81.82"];

  // To block an IP address, you can use the following code:
  // Get the client IP address dynamically
  fetch('https://api.ipify.org?format=json')
    .then((response) => response.json())
    .then((data) => {
      const clientIp = data.ip;
      const isBlocked = (ip) => blockedIps.includes(ip);
  
      if (isBlocked(clientIp)) {
        // Block the request and redirect to Google.com
        window.location.replace("https://www.google.com");
      }
    })
    .catch((error) => console.error(error));
