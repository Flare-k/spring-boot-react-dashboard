# 3. 원하는 Docker 이미지 찾기

</br>

## 3.1 Docker Registry  

> Docker Registry에는 사용자가 사용할 수 있도록 데이터베이스를 통해 Image를 제공해주고 있다.  
누구나 이미지를 만들어 Push할 수 있으며 푸시된 이미지는 다른 사람들에게 공유 가능하다.

</br>

## 3.2 Docker Public Registry 검색 및 확인
[Docker hub]([https://hub.docker.com/](https://hub.docker.com/))에서 어떤 Image들이 있는지 확인할 수 있다.  

- <b>3.2.1 Docker 명령어로 검색</b>  
    tomcat image을 찾아보자

    ```
    $ sudo docker search tomcat
    ```

    </br>

- <b>3.2.2 Docker 이미지 다운로드하기</b>  

    ```
    $ sudo docker pull tomcat
    ```

    </br>

- <b>3.2.3 로컬 시스템에 있는 Docker 이미지 확인하기</b>  

    ```
    $ sudo docker images
    ```

    </br>

