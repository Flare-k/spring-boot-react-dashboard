# 2. Install Docker  
<br/>

클라우드 환경이 아닌 On-Premise 환경에서 설치하려면 다음의 경로로 설치하면 된다.  

Virtual Box를 설치하고 다음의 파일을 [다운로드](https://drive.google.com/file/d/1JMs6Iw1_Ke7lz4g5tNqNE6ybA57CPVsD/view) 받는다.  

<details>
<summary>Virtual Box (Click!)</summary>
    </br>
    <span>Windows라면 Windows Host Version을 </span>
    <a markdown="1" href="https://www.virtualbox.org/wiki/Downloads">다운로드</a>
    <span> 받는다.</span>
</details>

</br>

> 최소 필요 사양  
> CPU 4개 이상, RAM 8GB 이상
> - ID:PW// server1 : test1234
> - 관리자 전환: sudo -i  

</br></br></br>

### 2.1 AWS 환경에서 Docker 설치하기

1. EC2 인스턴스 생성  
    1-1 단계 1: Amazon Machine Image(AMI) 선택  
    <img src="./image_path/aws_docker1.png" width="600px" height="300px" title="aws_docker1" alt="aws_docker1"></img>
    - <b>Amazon Linux 2 AMI</b> 선택  
    </br>

    1-2 단계 2: 인스턴스 유형 선택  
    <img src="./image_path/aws_docker2.png" width="600px" height="300px" title="aws_docker2" alt="aws_docker2"></img>
    - VM에서 설정한 사양과 비슷한 <b>t2.large</b> 모델 선택  
    </br>  

    1-3 단계 3: 인스턴스 세부 정보 구성    
    <img src="./image_path/aws_docker3.png" width="600px" height="300px" title="aws_docker3" alt="aws_docker3"></img>  
    - 퍼블릭 IP 자동 할당 <b>활성화</b> 선택
    </br>  
 
    1-4 단계 4: 스토리지 추가  
    <img src="./image_path/aws_docker4.png" width="600px" height="300px" title="aws_docker4" alt="aws_docker4"></img>  
    - 스토리지는 Default 값으로 선택
    - 다음: 태그 추가 클릭
    </br>  

    1-5 단계 5: 태그 추가  
    <img src="./image_path/aws_docker5.png" width="600px" height="300px" title="aws_docker5" alt="aws_docker5"></img>
    - Key : Name  
    - Value : Docker_Server (원하는대로 설정 가능) 
    - 다음: 보안 그룹 구성 클릭  
    </br>

    1-6 단계 6: 보안 그룹 구성  
    <img src="./image_path/aws_docker6.png" width="600px" height="300px" title="aws_docker6" alt="aws_docker6"></img>  
    - 새 보안 그룹 생성
    - 보안 그룹 이름 : <b>DOCKER_SG</b> (원하는대로 설정 가능)  
    - 검토 및 시작 클릭  
    </br>  

    1-7 단계 7: 인스턴스 시작 검토  
    <img src="./image_path/aws_docker7.png" width="600px" height="300px" title="aws_docker7" alt="aws_docker7"></img>  
    - 시작하기 클릭  
    </br>  

2. EC2 인스턴스 접속


3. Docker 환경 구축


4. Docker 명령어 확인


</br></br></br>

## References

[재즐보프](https://www.youtube.com/watch?v=OrK3Z1CimuU&list=PLnIaYcDMsSczk-byS2iCDmQCfVU_KHWDk&index=4&ab_channel=%EC%9E%AC%EC%A6%90%EB%B3%B4%ED%94%84)  

