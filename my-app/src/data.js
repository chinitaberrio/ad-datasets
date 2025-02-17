import * as React from 'react';

const rows = [
    {
        id: "KITTI", //07.08. fertig
        href: "http://www.cvlibs.net/datasets/kitti/",
        size_hours: "6",
        size_storage: "180",
        frames: "",
        numberOfScenes: '50',
        samplingRate: "10",
        lengthOfScenes: "",
        sensors: "camera, lidar, gps/imu",
        sensorDetail: "2 greyscale cameras 1.4 MP, 2 color cameras 1.4 MP, 1 lidar 64 beams 360° 10Hz, 1 inertial and " +
            "GPS navigation system",
        benchmark: " stereo, optical flow, visual odometry, slam, 3d object detection, 3d object tracking",
        annotations: "3d bounding boxes",
        licensing: "Creative Commons Attribution-NonCommercial-ShareAlike 3.0",
        relatedDatasets: 'Semantic KITTI, KITTI-360',
        publishDate: "2012.03",
        lastUpdate: "2021.02",
        relatedPaper: "http://www.cvlibs.net/publications/Geiger2013IJRR.pdf"
    },
    {
        id: "nuScenes", //05.08. //fertig
        href: "https://www.nuscenes.org/",
        size_hours: "15",
        size_storage: "",
        frames: "1400000",
        numberOfScenes: "1000",
        samplingRate: "",
        lengthOfScenes: "20",
        sensors: "camera, lidar, radar, gps/imu",
        sensorDetail: "1x lidar 32 channels 360° 20Hz, 5x long range radar 13Hz, 6x camera 1600x1200 12Hz, 1x gps/imu 1000Hz",
        benchmark: "3d object detection, tracking, trajectory (prediction), lidar segmentation, panoptic segmentation & " +
            "tracking",
        annotations: "semantic category, attributes, 3d bounding boxes ",
        licensing: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Public " +
            "(CC BY-NC-SA 4.0)",
        relatedDatasets: "nuImages",
        publishDate: "2019.03",
        lastUpdate: "2020.12",
        relatedPaper: "https://arxiv.org/pdf/1903.11027.pdf"
    },
    {
        id: "Oxford Robot Car", //05.08. fertig
        href: "https://robotcar-dataset.robots.ox.ac.uk/",
        size_hours: '210', //paper dong
        size_storage: "23150",
        frames: "",
        numberOfScenes: "100",
        samplingRate: "",
        lengthOfScenes: "",
        sensors: "camera, lidar, ins/gps",
        sensorDetail: "1x camera Bumblebee XB3 1280x960x3 16Hz, 3x camera Grasshopper2 1024x1024 12Hz" +
            ", 2x lidar SICK LMS-151 270° 50Hz, 1x lidar SICK LD-MRS 90° 4 plane 12.5Hz, 1x NovAtel " +
            "SPAN-CPT ALIGN 50Hz GPS+INS",
        benchmark: "",
        annotations: "",
        licensing: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International",
        relatedDatasets: "Oxford Radar Robot Car",
        publishDate: "2016.11",
        lastUpdate: "2020.02",
        relatedPaper: "https://robotcar-dataset.robots.ox.ac.uk/images/robotcar_ijrr.pdf"
    },
    {
        id: "Waymo Open Perception", //07.08. fertig
        href: "https://waymo.com/open/data/perception/",
        size_hours:  "10.83", //calculated
        size_storage: "",
        frames: "390000",
        numberOfScenes: "1950",
        samplingRate: "10",
        lengthOfScenes: "20",
        sensors: "camera, lidar",
        sensorDetail: "5x cameras (front and sides) 1920x1280 & 1920x1040, 1x mid-range lidar, 4x short-range lidars",
        benchmark: "2d detection, 3d detection, 2d tracking, 3d tracking",
        annotations: "3d bounding boxes (lidar), 2d bounding boxes (camera)",
        licensing: "freely available for non-commercial purposes",
        relatedDatasets: "Waymo Open Motion",
        publishDate: "2019.08",
        lastUpdate: "2020.03",
        relatedPaper: "https://arxiv.org/pdf/1912.04838.pdf"
    },
    {
        id: "Argoverse Motion Forecasting", //22.08. fertig
        href: "https://www.argoverse.org/",
        size_storage: "4.81",
        size_hours: "320",
        frames: "16227850",
        numberOfScenes: "324557",
        samplingRate: "10",
        lengthOfScenes: "5",
        sensors: "camera, lidar, gps",
        sensorDetail: "2x lidar 32 beam 40° 10Hz, 7x ring cameras 1920x1200 combined 360° 30Hz, 2x front-view facing " +
            "stereo cameras 0.2986m baseline 2056x2464 5Hz",
        benchmark: "forecasting",
        annotations: "semantic vector map, rasterized map, trajectories",
        licensing: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Public (CC BY-NC-SA 4.0)",
        relatedDatasets: "Argoverse 3D Tracking",
        publishDate:"2019.06",
        lastUpdate: "",
        relatedPaper: "https://arxiv.org/pdf/1911.02620.pdf"
    },    
    {
        id: "Argoverse 3D Tracking", //22.08. fertig
        href: "https://www.argoverse.org/",
        size_storage: "254.4",
        size_hours: "1",
        frames: "44000",
        numberOfScenes: "113",
        samplingRate: "30",
        lengthOfScenes: "",
        sensors: "camera, lidar, gps",
        sensorDetail: "2x lidar 40° 10Hz, 7x ring cameras 1920x1200 combined 360° 30Hz, 2x front-view facing " +
            "stereo cameras 2056x2464 5Hz",
        benchmark: "tracking",
        annotations: "semantic vector map, rasterized map, 3d bounding boxes",
        licensing: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Public (CC BY-NC-SA 4.0)",
        relatedDatasets: "Argoverse Motion Forecasting",
        publishDate:"2019.06",
        lastUpdate: "",
        relatedPaper: "https://arxiv.org/pdf/1911.02620.pdf"
    },
    {
        id: "Semantic KITTI", //22.08. fertig
        href: "http://www.semantic-kitti.org/",
        size_storage: "",
        size_hours: "",
        frames: "43552", // lidar scans
        numberOfScenes: "21",
        samplingRate: "10",
        lengthOfScenes: "",
        sensors: "lidar",
        sensorDetail: "Velodyne HDL-64E from sequences of the odometry benchmark of the KITTI Vision Benchmark with 360°" +
            " view",
        benchmark: "semantic segmentation, panoptic segmentation, 4D panoptic segmentation, moving object segmentation," +
            " semantic scene completion",
        annotations: "semantic segmentation",
        licensing: "Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) ",
        relatedDatasets: "KITTI",
        publishDate: "2019.07",
        lastUpdate: "2021.02",
        relatedPaper: "https://arxiv.org/abs/1904.01416.pdf"
    },
    {
        id: "ApolloScape", //04.08. fertig
        href: "http://apolloscape.auto/",
        size_hours: "100", //100+
        size_storage: "",
        frames: "143906",
        numberOfScenes: "",
        samplingRate: "30",
        lengthOfScenes: "",
        sensors: "camera, lidar, imu/gnss",
        sensorDetail: "2x VUX-1HA laser scanners 360°, 1x VMX-CS6 camera system, 1x measuring head with gnss/imu, 2x high " +
            "frontal cameras 3384 ×2710",
        benchmark: '2d image parsing, 3d car instance understanding, landmark segmentation, self-localization, ' +
            'trajectory prediction, 3d detection, 3d tracking, stereo',
        annotations: 'high density 3d point cloud map, per-pixel, per-frame semantic image label, lane mark label' +
            'semantic instance segmentation, geo-tagged',
        licensing: 'freely available for non-commercial purposes',
        relatedDatasets: '',
        publishDate: "2018.03",
        lastUpdate: '2020.09',
        relatedPaper: "https://arxiv.org/pdf/1803.06184.pdf"
    },
    {
        id: "BDD100k", //07.08. //fertig
        href: "https://www.bdd100k.com/",
        size_storage: "1800",
        size_hours: "1111",
        frames: "120000000",
        numberOfScenes: "100000",
        samplingRate: "30",
        lengthOfScenes: "40",
        sensors: "camera, gps/imu",
        sensorDetail: "crowd-sourced therefore no fixed setup, camera (720p) and gps/imu",
        benchmark: "object detection, instance segmentation, multiple object tracking, segmentation tracking, " +
            "semantic segmentation, lane marking, drivable area, image tagging, imitation learning, domain adaption",
        annotations: "bounding boxes, instance segmentation, semantic segmentation, box tracking, semantic tracking, " +
            "drivable area",
        licensing: "BSD 3-Clause",
        relatedDatasets: "",
        publishDate: "2020.04",
        lastUpdate: "",
        relatedPaper: "https://arxiv.org/pdf/1805.04687.pdf"
    },
    {
        id: "WildDash", //09.08. fertig
        href: "https://wilddash.cc/",
        size_storage: "",
        size_hours: "",
        frames: "",
        numberOfScenes: '156',
        samplingRate: "",
        lengthOfScenes: "",
        sensors: 'camera',
        sensorDetail: 'various sources, e.g. YouTube',
        benchmark: 'semantic segmentation, instance segmentation, panoptic segmentation',
        annotations: 'semantic segmentation, instance segmentation',
        licensing: 'CC-BY-NC 4.0 ',
        relatedDatasets: '',
        publishDate: '2018.02',
        lastUpdate: '2020.06',
        relatedPaper: "https://openaccess.thecvf.com/content_ECCV_2018/papers/Oliver_Zendel_WildDash_-_Creating_ECCV_2018_paper.pdf"
    },
    {
        id: "Lyft Level5 Prediction", //20.08. fertig
        href: "https://level-5.global/data/prediction/",
        size_hours: "1118",
        size_storage: '',
        frames: "42500000",  //calculated from numberOfScenes, samplingRate, lengthOfScenes
        numberOfScenes: '170000',
        samplingRate: '10',
        lengthOfScenes: "25",
        sensors: "camera, lidar, radar",
        sensorDetail: "7 cameras with 360° view, 3 lidars with 40-64 channels at 10Hz, 5 radars",
        benchmark: '',
        annotations: 'semantic map annotations, trajectories',
        licensing: 'Creative Commons Attribution-NonCommercial-ShareAlike 4.0 (CC-BY-NC-SA-4.0)',
        relatedDatasets: 'Lyft Level5 Perception',
        publishDate: "2020.06",
        lastUpdate: "",
        relatedPaper: "https://tinyurl.com/lyft-prediction-dataset"
    },
    {
        id:   "Cityscapes 3D", //20.08. fertig
        href: "https://www.cityscapes-dataset.com/",
        size_hours: '',
        size_storage: '63.141',    //Yin, Berger Paper
        frames: '',
        numberOfScenes: '',
        samplingRate: '17',
        lengthOfScenes: '1.8',
        sensors: 'camera, gps, thermometer',
        sensorDetail: 'stereo cameras 22 cm baseline 17Hz, odometry from in-vehicle sensors & outside temperature & GPS ' +
            'tracks,',
        benchmark: 'pixel-level semantic labeling, instance-level semantic labeling, panoptic semantic sabeling ' +
            '3d vehicle detection',
        annotations: 'dense semantic segmentation, instance segmentation for vehicles & people, 3d bounding boxes',
        licensing: 'freely available for non-commercial purposes',
        relatedDatasets: "",
        publishDate: '2016.02',
        lastUpdate: '2020.10',
        relatedPaper: "https://arxiv.org/pdf/2006.07864.pdf"
    },
    {
        id: "Lyft Level5 Perception", //20.08. fertig
        href: "https://level-5.global/data/perception/",
        size_hours: "2.5",
        size_storage: "",
        frames: "",
        numberOfScenes: '366',
        samplingRate: "",
        lengthOfScenes: "",
        sensors: "camera, lidar",
        sensorDetail: "",
        benchmark: '',
        annotations: '3d bounding boxes, rasterised road geometry',
        licensing: 'Creative Commons Attribution-NonCommercial-ShareAlike 4.0 (CC-BY-NC-SA-4.0)',
        relatedDatasets: 'Lyft Level5 Prediction',
        publishDate: "2019.07",
        lastUpdate: "",
    },
    {
        id: "nuImages", //20.08. fertig
        href: "https://www.nuscenes.org/nuimages",
        size_hours: "150",
        size_storage: "",
        frames: "1200000",
        numberOfScenes: "93000",
        samplingRate: "2",
        lengthOfScenes: "",
        sensors: "camera, lidar, radar, gps/imu",
        sensorDetail: "1x lidar 32 channels 360° 20Hz, 5x long range radar 13Hz, 6x camera 1600x1200 12Hz, 1x gps/imu 1000Hz",
        benchmark: "",
        annotations: "instance masks, 2d bounding boxes, semantic segmentation masks, attribute annotations",
        licensing: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Public " +
            "(CC BY-NC-SA 4.0)",
        relatedDatasets: "nuScenes",
        publishDate: "2020.07",
        lastUpdate: "",
    },
    {
        id: "PandaSet", //05.08. fertig
        href: "https://pandaset.org/",
        size_hours: '0.23', //calculated
        size_storage: "",
        frames: "48000",
        numberOfScenes: "103",  //Sekundärquelle
        samplingRate: "",
        lengthOfScenes: "8",
        sensors: "camera, lidar, gps/imu",
        sensorDetail: "5x wide angle cameras 1920x1080 10Hz, 1x long focus camera 1920x1080 10Hz, " +
            "1x mechanical spinning LiDAR 64 channels 360° 10Hz, 1x forward-facing LiDAR 150 channels 60° 10Hz" +
            "1x mechanical spinning LiDAR, 1x forward-facing LiDAR, 6x cameras, on-board GPS/IMU",
        benchmark: "",
        annotations: "3d bounding boxes, attributes, point cloud segmentation ",
        licensing: "Creative Commons Attribution 4.0 International Public (CC BY 4.0)",
        relatedDatasets: "",
        publishDate: "2020.04",
        lastUpdate: "",
    },
    {
        id: "Waymo Open Motion", //07.08. fertig
        href: "https://waymo.com/open/data/motion/",
        size_hours:  "574",
        size_storage: "",
        frames: "20670800", //calculated
        numberOfScenes: "103354",
        samplingRate: "10",
        lengthOfScenes: "20",
        sensors: "camera, lidar",
        sensorDetail: "5x cameras, 5x lidar, ",
        benchmark: "motion prediction, interaction prediction",
        annotations: "3d bounding boxes, 3d hd map information",
        licensing: "freely available for non-commercial purposes",
        relatedDatasets: "Waymo Open Perception",
        publishDate: "2021.03",
        lastUpdate: "2021.09",
        relatedPaper: "https://arxiv.org/pdf/2104.10133.pdf"
    },
    {
        id: "openDD", //09.08. fertig
        href: "https://l3pilot.eu/data/opendd",
        size_storage: "",
        size_hours: '62.7',
        frames: '6771600', //calculated size_hours*samplingRate
        numberOfScenes: '501',
        samplingRate: '30',
        lengthOfScenes: "",
        sensors: 'camera',
        sensorDetail: 'DJI Phantom 4 3840×2160 camera drone',
        benchmark: 'trajectory predictions',
        annotations: '2d bounding boxes, trajectories',
        licensing: 'Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0) ',
        relatedDatasets: '',
        publishData: '2020.09',
        lastUpdate: '',
        relatedPaper: "https://arxiv.org/pdf/2007.08463.pdf"
    },

    {
        id: "RoadAnomaly21", //09.08. fertig
        href: "https://segmentmeifyoucan.com/datasets",
        size_storage: '0.05',
        size_hours: "",
        frames: '100',
        numberOfScenes: '100',
        samplingRate: "",
        lengthOfScenes: "",
        sensors: 'camera',
        sensorDetail: 'images from web resources 2048x1024 & 1280x720',
        benchmark: 'anomaly segmentation',
        annotations: 'semantic segmentation',
        licensing: 'various, see ' +
            '"https://github.com/SegmentMeIfYouCan/road-anomaly-benchmark/blob/master/doc/RoadAnomaly/credits.txt" ' +
            'for detail',
        relatedDatasets: 'RoadObstacle21',
        publishDate: '2021.04',
        lastUpdate: '',
        relatedPaper: "https://arxiv.org/pdf/2104.14812.pdf"
    },
    {
        id: "Comma2k19", //10.08. fertig
        href: "https://github.com/commaai/comma2k19",
        size_storage: "100",
        size_hours: "33.65", //calculated
        frames: "",
        numberOfScenes: "2019",
        samplingRate: "",
        lengthOfScenes: "60",
        sensors: "camera, radar, gnss/imu ",
        sensorDetail: "two different car types, 1x road-facing camera Sony IMX2984 20Hz, 1x gnss u-blox M8 chip5 10Hz, " +
            "gyro and accelerometer data LSM6DS3 100Hz, magnetometer data AK09911 10Hz",
        benchmark: "",
        annotations: "",
        licensing: "MIT",
        relatedDatasets: "",
        publishDate: "2018.12",
        lastUpdate: "",
        relatedPaper: "http://export.arxiv.org/pdf/1812.05752"
    },
    {
        id: "KITTI-360", //21.08. fertig
        href: "http://www.cvlibs.net/datasets/kitti-360/",
        size_storage: "",
        size_hours: "",
        frames: "400000",
        numberOfScenes: "",
        samplingRate: "",
        lengthOfScenes: "",
        sensors: "camera, lidar, gps/imu",
        sensorDetail: "2x 180° fisheye camera, 1x 90° perspective stereo camera, 1x Velodyne HDL-64E & SICK LMS 200 " +
            "laser scanning unit in pushbroom configuration",
        benchmark: "",
        annotations: "semantic instance segmentation",
        licensing: "Creative Commons Attribution-NonCommercial-ShareAlike 3.0",
        relatedDatasets: "KITTI",
        publishDate: "2015.11",
        lastUpdate: "2021.04",
        relatedPaper: "https://openaccess.thecvf.com/content_cvpr_2016/papers/Xie_Semantic_Instance_Annotation_CVPR_2016_paper.pdf"
    },
    {
        id: "Fishyscapes", //21.08. fertig
        href: "https://fishyscapes.com/",
        size_storage:"",
        size_hours: "",
        frames: "",
        numberOfScenes: "",
        samplingRate: "",
        lengthOfScenes: "",
        sensors: "camera",
        sensorDetail: "based on the validation set of Cityscapes overlayed with anomalous objects " +
            "and the original LostAndFound with extended pixel-wise annotations",
        benchmark: "anomaly detection for semantic segmentation",
        annotations: "semantic segmentation",
        licensing: "",
        relatedDatasets: "Cityscapes, LostAndFound",
        publishDate: "2019.09",
        lastUpdate: "",
        relatedPaper: "https://arxiv.org/pdf/1904.03215.pdf"
    },
    {
        id: "LostAndFound", //22.08. fertig
        href: "http://www.6d-vision.com/lostandfounddataset",
        size_storage: "",
        size_hours: "",
        frames: "21040", //2104 annotated frames, every 10th
        numberOfScenes: "112",
        samplingRate: "",
        lengthOfScenes: "",
        sensors: "camera",
        sensorDetail: "stereo camera setup baseline 21cm 2048x1024",
        benchmark: "",
        annotations: "semantic segmentation",
        licensing: "freely available for non-commercial purposes",
        relatedDatasets: "",
        publishDate: "2016.09",
        lastUpdate: "",
        relatedPaper: "https://arxiv.org/pdf/1609.04653.pdf"
    },
    {
        id: "KAIST Multi-Spectral Day/Night", //22.08. fertig
        href: "http://multispectral.kaist.ac.kr",
        size_storage: "",
        size_hours: "",
        frames: "",
        numberOfScenes: "",
        samplingRate: "25",
        lengthOfScenes: "",
        sensors: "camera, lidar, gps/imu, thermal camera,",
        sensorDetail: "2x PointGrey Flea3 RGB camera 1280 × 960, 1x FLIR A655Sc thermal camera 640x480 50Hz, " +
            "1x Velodyne HDL-32E 3D LiDAR 360° 32 beams 10Hz, 1x OXTS RT2002 gps/ins 100Hz",
        benchmark: "object detection, vision sensor enhancement, depth estimation, multi-spectral colorization",
        annotations: "dense depth map, bounding boxes",
        licensing: "Creative Commons Attribution-NonCommercial-ShareAlike 3.0",
        relatedDatasets: "",
        publishDate: "2017.12",
        lastUpdate: "",
        relatedPaper: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8293689"
    },
    {
        id: "A2D2", //22.08. fertig
        href: "https://www.a2d2.audi/a2d2/en.html",
        size_storage: "2300",
        size_hours: "",
        frames: "433833", //calculated sum of annotated and not annotated frames
        numberOfScenes: "3",
        samplingRate: "",
        lengthOfScenes: "",
        sensors: "camera, lidar, gps/imu",
        sensorDetail: "5x lidar 16 channels 360° 10Hz, 1x front centre camera 1920x1208 30Hz, 5x surround cameras" +
            "1920x1208 30Hz, vehicle bus data",
        benchmark: "",
        annotations: "semantic segmentation, point cloud segmentation, instance segmentation, 3d bounding boxes",
        licensing: "Creative Commons Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0)",
        relatedDatasets: "",
        publishDate: "2020.04",
        lastUpdate: "",
        relatedPaper: "https://arxiv.org/pdf/2004.06320.pdf"
    },
    {
        id: "Caltech Pedestrian", //22.08. fertig
        href: "http://www.vision.caltech.edu/Image_Datasets/CaltechPedestrians/",
        size_storage: "",
        size_hours: "10",
        frames: "1000000",
        numberOfScenes: "137",
        samplingRate: "30",
        lengthOfScenes: "60",
        sensors: "camera",
        sensorDetail: "1x camera 640x480 30Hz",
        benchmark: "pedestrian detection",
        annotations: "bounding boxes",
        licensing: "",
        relatedDatasets: "",
        publishDate: "2010.03",
        lastUpdate: "2019.01",
        relatedPaper: "http://www.vision.caltech.edu/Image_Datasets/CaltechPedestrians/files/CVPR09pedestrians.pdf"
    },    
    {
        id: "KAIST Urban", //22.08. fertig
        href: "https://irap.kaist.ac.kr/dataset/",
        size_storage: "",
        size_hours: "",
        frames: "",
        numberOfScenes: "18",
        samplingRate: "",
        lengthOfScenes: "",
        sensors: "camera, lidar, gps/imu",
        sensorDetail: "2x Velodyne VLP-16 16 channel lidar 360° 10Hz, 2x SICK LMS-511 1 channel lidar 190° 100Hz, " +
            "1x stereo camera 1280x560 10Hz",
        benchmark: "",
        annotations: "",
        licensing: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0",
        relatedDatasets: "",
        publishDate:"2017.09",
        lastUpdate: "2019.06",
        relatedPaper: "https://irap.kaist.ac.kr/dataset/papers/IJRR2019_dataset.pdf"
    },
    {
        id: "Udacity", //22.08. fertig
        href: "https://github.com/udacity/self-driving-car/",
        size_storage: "223", //paper yin,berger
        size_hours: "10",
        frames: "",
        numberOfScenes: "",
        samplingRate: "",
        lengthOfScenes: "",
        sensors: "camera, lidar, gps/imu", //paper yin,berger
        sensorDetail: "monocular color camera 1920x1200, velodyne 32 lidar, gps/imu", //paper yin, berger
        benchmark: "",
        annotations: "2d bounding boxes",
        licensing: "MIT",
        relatedDatasets: "",
        publishDate:"2016.09",
        lastUpdate: ""
    },
    {
        id: "Ford Autonomous Vehicle Dataset", //20.08. fertig
        href: "https://avdata.ford.com/",
        size_storage: "",
        size_hours: "",
        frames: "",
        numberOfScenes: "",
        samplingRate: "",
        lengthOfScenes: "",
        sensors: "camera, lidar, gps/imu",
        sensorDetail: "4x HDL-32E Lidars, 4x Flea3 GigE Point Grey Cameras in stereo pairs (front & back) 80° 15Hz," +
            "2x Flea3 GigE Point Grey Cameras (sides) 80° 15Hz, 1x Flea3 GigE Point Grey Camera 40° 7Hz, 1x Applanix " +
            "POS LV gps/imu",
        benchmark: "",
        annotations: "3d point cloud maps, ground reflectivity map",
        licensing: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International",
        relatedDatasets: "",
        publishDate:"2020.03",
        lastUpdate: "",
        relatedPaper: "https://s23.q4cdn.com/258866874/files/doc_downloads/2020/03/2003.07969.pdf"
    },
    {
        id: "INTERACTION dataset", //18.08. fertig
        href: "https://interaction-dataset.com/",
        size_storage: "",
        size_hours: "16.5",
        frames: "594588", //calculated from detailed video lengths (paper) and samplingRate
        numberOfScenes: "",
        samplingRate: "10",
        lengthOfScenes: "",
        sensors: "camera",
        sensorDetail: "drones & traffic cameras 3840x2160 30Hz downscaled to 10Hz",
        benchmark: "motion prediction",
        annotations: "2d bounding boxes, semantic map, motion/trajectories",
        licensing: "freely available for non-commercial purposes",
        relatedDatasets: "",
        publishDate:"2019.09",
        lastUpdate: "",
        relatedPaper: "https://arxiv.org/pdf/1910.03088.pdf"
    },
    {
        id: "MCity Data Collection", //23.08. fertig
        href: "https://arxiv.org/pdf/1912.06258.pdf",
        size_storage: "11000",
        size_hours: "50",
        frames: "",
        numberOfScenes: "255",
        samplingRate: "",
        lengthOfScenes: "",
        sensors: "camera, lidar, radar, gps/imu",
        sensorDetail: "3x Velodyne Ultra Puck VLP-32C lidar 10Hz, 2x forward-facing cameras 30° 1080P 30Hz," +
            "1x backward-facing camera 90° 1080P 30Hz, 1x cabin pose camera 1280×1080 30Hz, 1x cabin head/eyeball " +
            "camera 640P 30Hz, 1x Ibeo four beam LUX sensor 25Hz, 1x Delphi ESR 2.5 Radar 90° 20Hz," +
            "1x NovAtel FlexPak6 with IMU-IGM-S1 and 4G cellular for RTK GPS single antenna 1Hz",
        benchmark: "",
        annotations: "semantic segmentation of objects, traffic lights, traffic signs, lanes",
        licensing: "",
        relatedDatasets: "",
        publishDate:"2019.12",
        lastUpdate: "",
        relatedPaper: "https://arxiv.org/pdf/1912.06258.pdf"
    },
    {
        id: "Oxford Radar Robot Car", //18.08. fertig
        href: "https://oxford-robotics-institute.github.io/radar-robotcar-dataset/",
        size_storage: "4700",
        size_hours: "",
        frames: "",
        numberOfScenes: "32",
        samplingRate: "",
        lengthOfScenes: "",
        sensors: "camera, lidar, radar, gps/imu",
        sensorDetail: "1 x Navtech CTS350-X Millimetre-Wave FMCW radar 4 Hz, 2 x Velodyne HDL-32E LIDAR 360°" +
            "32 planes 20 Hz, 1 x Point Grey Bumblebee XB3 trinocular stereo camera 1280×960×3 16 Hz 66°" +
            "3 x Point Grey Grasshopper2 1024×1024 11.1 Hz 180°, 2 x SICK LMS-151 2D LIDAR 270° 50Hz, " +
            "1 x NovAtel SPAN-CPT ALIGN inertial and GPS navigation system 6 axis 50Hz,",
        benchmark: "",
        annotations: "ground truth data",
        licensing: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International",
        relatedDatasets: "Oxford Robot Car",
        publishDate:"2020.02",
        lastUpdate: "",
        relatedPaper: "https://arxiv.org/pdf/1909.01300.pdf"
    },
    {
        id: "NightOwls", //18.08. fertig
        href: "https://www.nightowls-dataset.org/",
        size_storage: "",
        size_hours: "5.17", //calculated from frames and sampling rate
        frames: "279000",
        numberOfScenes: "40",
        samplingRate: "15",
        lengthOfScenes: "",
        sensors: "camera",
        sensorDetail: "1x industry standard 1024x640 camera",
        benchmark: "pedestrian detection, object detection",
        annotations: "bounding boxes, attributes, temporal tracking annotations",
        licensing: "freely available for non-commercial purposes",
        relatedDatasets: "",
        publishDate:"2018.12",
        lastUpdate: "",
        relatedPaper: "https://www.robots.ox.ac.uk/~vgg/publications/2018/Neumann18b/neumann18b.pdf"
    },
    {
        id: "DDD 20", //17.08. fertig
        href: "https://sites.google.com/view/davis-driving-dataset-2020/home",
        size_storage: "1300",
        size_hours: "51",
        frames: "",
        numberOfScenes: "216",
        samplingRate: "",
        lengthOfScenes: "",
        sensors: "camera, car parameters",
        sensorDetail: "1x DAVIS346B 346x260 up to 50Hz, vehicle bus data",
        benchmark: "",
        annotations: "",
        licensing: "Creative Commons Attribution-ShareAlike 4.0 International",
        relatedDatasets: "DDD 17",
        publishDate:"2020.02",
        lastUpdate: "",
        relatedPaper: "https://arxiv.org/pdf/2005.08605.pdf"
    },
    {
        id: "H3D", //16.08. fertig
        href: "https://paperswithcode.com/dataset/h3d",
        size_storage: "",
        size_hours: "0.77", //paper dong
        frames: "27721",
        numberOfScenes: "160",
        samplingRate: "",
        lengthOfScenes: "",
        sensors: "camera, lidar, gps/imu",
        sensorDetail: "3x color PointGrey Grasshopper3 video cameras 1920x1200 90°/80° 30Hz, 1x Velodyne HDL-64E " +
            "LiDAR 64 beams 360° 10Hz, 1x GeneSys Eletronik GmbH Automotive Dynamic Motion Analyzer 100Hz",
        benchmark: "",
        annotations: "3d bounding boxes",
        licensing: "",
        relatedDatasets: "",
        publishDate: "2019.03",
        lastUpdate: "",
        relatedPaper: "https://arxiv.org/pdf/1903.01568.pdf"
    },
    {
        id: "4Seasons", //16.08.21 fertig
        href: "https://www.4seasons-dataset.com/",
        size_storage: "",
        size_hours: "",
        frames: "",
        numberOfScenes: "30", //will be updated in the future
        samplingRate: "30",
        lengthOfScenes: "",
        sensors: "camera, imu/rtk-gnss",
        sensorDetail: "2x cameras stereo baseline 30cm 800x400 (after cropping)",
        benchmark: "globally consistent reference poses",
        annotations: "",
        licensing: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)",
        relatedDatasets: "",
        publishDate: "2020.10",
        lastUpdate: "",
        relatedPaper: "https://arxiv.org/pdf/2009.06364.pdf"
    },
    {
        id: "RadarScenes", //16.08. fertig
        href: "https://radar-scenes.com/",
        size_storage: "",
        size_hours: "4",
        frames: "",
        numberOfScenes: "158",
        samplingRate: "",
        lengthOfScenes: "",
        sensors: "camera, radar, odometry",
        sensorDetail: "4x 77 GHz series production automotive 60° radar sensor, 1x documentary camera",
        benchmark: "",
        annotations: "point-wise",
        licensing: "Creative Commons Attribution Non Commercial Share Alike 4.0 International",
        relatedDatasets: "",
        publishDate:"2021.03",
        lastUpdate: "",
        relatedPaper: "https://arxiv.org/pdf/2104.02493.pdf"
    },
    {
        id: "India Driving Dataset", //12.08. fertig
        href: "https://idd.insaan.iiit.ac.in/",
        size_storage: "",
        size_hours: "",
        frames: "10004",
        numberOfScenes: "182",
        samplingRate: "",
        lengthOfScenes: "",
        sensors: "camera",
        sensorDetail: "1080p & 720p stereo image",
        benchmark: "Pixel-Level Semantic Segmentation Task, Instance-Level Semantic Segmentation Task",
        annotations: "semantic segmentation",
        licensing: "",
        relatedDatasets: "",
        publishDate: "2018.11",
        lastUpdate: "",
        relatedPaper: "https://idd.insaan.iiit.ac.in/media/publications/idd-650.pdf"
    },
    {
        id: "Synscapes", //12.08. fertig
        href: "https://7dlabs.com/synscapes-overview",
        size_storage: "",
        size_hours: "",
        frames: "25000",
        numberOfScenes: "25000",
        samplingRate: "",
        lengthOfScenes: "",
        sensors: "camera",
        sensorDetail: "RGB images in PNG format 1440x720 & upscaled version 2048x1024",
        benchmark: "",
        annotations: "2d bounding boxes, 3d bounding boxes, occlusion, truncation, semantic segmentation," +
            "instance segmentation, depth segmentation, scene metadata",
        licensing: "freely available for non-commercial purposes",
        relatedDatasets: "",
        publishDate: "2018.10",
        lastUpdate: "",
        relatedPaper: "https://arxiv.org/pdf/1810.08705v1.pdf"
    },
    {
        id: "RADIATE", //12.08. fertig
        href: "http://pro.hw.ac.uk/radiate/",
        size_storage: "",
        size_hours: "5", //calculated from fig. 5 in paper
        frames: "",
        numberOfScenes: "",
        samplingRate: "",
        lengthOfScenes: "",
        sensors: "camera, lidar, radar, gps/imu",
        sensorDetail: "1x ZED stereo camera 672x376 15Hz, 1x Velodyne HDL-32e LiDAR 32 channel 360° 10Hz, " +
            "1x Navtech CTS350-X radar 360°, 1x Advanced Navigation Spatial Dual GPS/IMU",
        benchmark: "",
        annotations: "2d bounding boxes",
        licensing: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International",
        relatedDatasets: "",
        publishDate: "2020.10",
        lastUpdate: "",
        relatedPaper: "https://arxiv.org/pdf/2010.09076.pdf"
    },
    {
        id: "Bosch Small Traffic Lights Dataset", //12.08. fertig
        href: "https://hci.iwr.uni-heidelberg.de/content/bosch-small-traffic-lights-dataset",
        size_storage: "",
        size_hours: "",
        frames: "13427",
        numberOfScenes: "",
        samplingRate: "",
        lengthOfScenes: "",
        sensors: "camera",
        sensorDetail: "raw 12bit HDR images with a red-clear-clear-blue filter 1280x720 & reconstructed 8-bit RGB " +
            "color images 1280x720",
        benchmark: "",
        annotations: "bounding boxes, state",
        licensing: "freely available for non-commercial purposes",
        relatedDatasets: "",
        publishDate:"2017.05",
        lastUpdate: "",
        relatedPaper: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7989163"
    },
    {
        id: "PepScenes",
        href: "https://github.com/huawei-noah/PePScenes",   //Seems to be offline
        relatedPaper: "https://arxiv.org/pdf/2012.07773.pdf"
    },
    {
        id: "WZ-traffic dataset",
        href: "https://github.com/Fangyu0505/traffic-scene-recognition"
    },
    {
        id: "Nighttime Driving",
        href: "http://people.ee.ethz.ch/~daid/NightDriving/"
    },
    {
        id: "AIODrive",
        href: "http://www.aiodrive.org/overview.html"
    },
    {
        id: "ROAD",
        href: "https://arxiv.org/abs/2102.11585"
    },
    {
        id: "ONCE",
        href: "https://once-for-auto-driving.github.io/index.html"
    },
    {
        id: "DriveU Traffic Light Dataset",
        href: "https://www.uni-ulm.de/en/in/driveu/projects/driveu-traffic-light-dataset/"
    },
    {
        id: "Bosch TL",
        href: "https://github.com/asimonov/Bosch-TL-Dataset"
    },
    {
        id: "nuPlan",
        href: "https://arxiv.org/abs/2106.11810"
    },
    {
        id: "Steet Hazards Dataset",
        href: "https://once-for-auto-driving.github.io/index.html"
    },
    {
        id: "JAAD",
        href: "https://paperswithcode.com/dataset/jaad"
    },
    {
        id: "RoadObstacle21",
        href: "https://segmentmeifyoucan.com/datasets"
    },
    {
        id: "Beyond PASCAL",
        href: "https://yuxng.github.io/Xiang_WACV_03242014.pdf"
    },
    {
        id: "The EuroCity Persons Dataset",
        href: "https://arxiv.org/abs/1805.07193"
    },
    {
        id: "Diverse Complexity Measures for Dataset Curation in Self-driving",
        href: "http://www.cs.toronto.edu/~sergio/publication/dataset/"
    },
    {
        id: "CADC",
        href: "http://cadcd.uwaterloo.ca/"
    },
    {
        id: "FAIRNets Dataset",
        href: "https://zenodo.org/record/3885249"
    },
    {
        id: "Diverse Complexity Measures for Dataset Curation in Self-driving",
        href: "https://arxiv.org/abs/2101.06554"
    },
    {
        id: "CARRADA Dataset",
        href: "https://arxiv.org/abs/2005.01456"
    },
    {
        id: "Astyx Dataset",
        href: "https://patrick-llgc.github.io/Learning-Deep-Learning/paper_notes/astyx_dataset.html"
    },
    {
        id: "CNN-based Lidar Point Cloud De-Noising in Adverse Weather",
        href: "https://ieeexplore.ieee.org/document/8990038"
    },
    {
        id: "Playing for Data",
        href: "http://download.visinf.tu-darmstadt.de/data/from_games/index.html"
    },
    {
        id: "Talk2Car",
        href: "https://talk2car.github.io/"
    },
    {
        id: "A Parametric Top-View Representation of Complex Road Scenes",
        href: "https://www.nec-labs.com/~mas/BEV/"
    },
    {
        id: "DRIV100",
        href: "https://arxiv.org/pdf/2102.00150.pdf"
    },
    {
        id: "PointCloudDeNoising",
        href: "https://github.com/rheinzler/PointCloudDeNoising"
    },
    {
        id: "Cars Dataset",
        href: "https://ai.stanford.edu/~jkrause/cars/car_dataset.html"
    },
    {
        id: "CADP",
        href: "https://ppms.cit.cmu.edu/media/project_files/CADP_IEEE_Camera_Ready_Final.pdf"
    },
    {
        id: "VITRO",
        href: "https://vitro-testing.com/test-data/dashcam-annotations/"
    },
    {
        id: "UDrive Dataset",
        href: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjqnfKIoK3uAhUOuaQKHZwcDEgQFjASegQIFBAC&url=https%3A%2F%2Ferticonetwork.com%2Fwp-content%2Fuploads%2F2017%2F12%2FUDRIVE-D41.1-UDrive-dataset-and-key-analysis-results-with-annotation-codebook.pdf&usg=AOvVaw17NgwnPrIal53hUYco9klG"
    },
    {
        id: "D^2 City",
        href: "https://arxiv.org/abs/1904.01975v1"
    },
    {
        id: "Semantic Segmentation Dataset for Urban Driving Scenes",
        href: "https://autonomous-driving.org/2018/07/15/semantic-segmentation-datasets-for-urban-driving-scenes/"
    },
    {
        id: "MIT-AVT Clustered Driving Scene Dataset",
        href: "https://ieeexplore.ieee.org/abstract/document/9304677/"
    },
    {
        id: "DDAD",
        href: "https://github.com/AdrienGaidon-TRI/DDAD"
    },
    {
        id: "RELLIS-3D Dataset",
        href: "https://arxiv.org/abs/2011.12954"
    },
    {
        id: "PolySync Dataset",
        href: "http://selfracingcars.com/blog/2016/7/26/polysync"
    },
    {
        id: "Scale AI",
        href: "https://techcrunch.com/2020/05/22/scale-ai-releases-free-lidar-dataset-to-power-self-driving-car-development/?guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAKGZ2LrvykvUJnpRzaXr-_6O48Af6iBGBjQWN7BZfLzH2l4dnkXnLk-oKzrjz7ioojEPaSDvwQ0TG3QuvY4e85v3r9I9pjNMaYpy5xGEmNFS9c3kr5nCthPREhtld9lFxWXquUMhJ2ReECLW3BWsibXJp7JOOHxCtw0XCg2GhRQa&guccounter=2"
    },
    {
        id: "DriveSeg",
        href: "https://news.mit.edu/2020/mit-toyota-release-visual-open-data-accelerate-autonomous-driving-research-0618"
    },
    {
        id: "KUL Belgium Traffic Sign dataset",
        href: "https://people.ee.ethz.ch/~timofter/traffic_signs/"
    },
    {
        id: "Brain4Cars",
        href: "http://brain4cars.com/"
    },
    {
        id: "Seasonal Variation Dataset",
        href: "http://www.cs.cmu.edu/~aayushb/localization/"
    },
    {
        id: "Bay Area Dataset",
        href: "http://www.cs.cmu.edu/~aayushb/localization/"
    },
    {
        id: "Illumination Changes in a day",
        href: "http://www.cs.cmu.edu/~aayushb/localization/"
    },
    {
        id: "comma.ai",
        href: "http://research.comma.ai/"
    },
    {
        id: "CULane Dataset",
        href: "https://xingangpan.github.io/projects/CULane.html"
    },
    {
        id: "DAVIS Driving Dataset",
        href: "https://docs.google.com/document/d/1HM0CSmjO8nOpUeTvmPjopcBcVCk7KXvLUuiZFS6TWSg/pub"
    },
    {
        id: "DBNet",
        href: "http://www.dbehavior.net/"
    },
    {
        id: "DIPLECS Autonomous Driving Datasets",
        href: "https://cvssp.org/data/diplecs/"
    },
    {
        id: "DR(eye)VE",
        href: "https://aimagelab.ing.unimore.it/imagelab/page.asp?IdPage=8"
    },
    {   id: "SemanticPOSS",
        href: "http://www.poss.pku.edu.cn/semanticposs.html" 
    },
    {
        id: "SemanticUSL",
        href: "https://unmannedlab.github.io/semanticusl"
    },
    {
        id: "ELEKTRA",
        href: "http://adas.cvc.uab.es/elektra/datasets/"
    },
    {
        id: "German Traffic Sign",
        href: "https://benchmark.ini.rub.de/"
    },
    {
        id: "HCI Challenging Stereo",
        href: "https://hci.iwr.uni-heidelberg.de/benchmarks/Challenging_Data_for_Stereo_and_Optical_Flow"
    },
    {
        id: "HD1K",
        href: "http://hci-benchmark.iwr.uni-heidelberg.de/"
    },
    {
        id: "Highway Work Zones",
        href: "http://www.andrew.cmu.edu/user/jonghole/workzone/data/"
    },
    {
        id: "LISA Traffic Sign Dataset",
        href: "http://cvrr.ucsd.edu/LISA/lisa-traffic-sign-dataset.html"
    },
    {
        id: "Malaga Stereo",
        href: "https://www.mrpt.org/MalagaUrbanDataset"
    },
    {
        id: "Malaga Laser Urban",
        href: "https://www.mrpt.org/MalagaUrbanDataset"
    },
    {
        id: "Mapillary Vistas",
        href: "https://www.mapillary.com/dataset/vistas"
    },
    {
        id: "NEXET",
        href: "https://blog.getnexar.com/https-medium-com-itayklein-intro-nexet-50e9b596d0e5"
    },
    {
        id: "Road Damage",
        href: "https://arxiv.org/pdf/1801.09454.pdf"
    },
    {
        id: "Ground Truth Stixel Dataset",
        href: "http://www.6d-vision.com/ground-truth-stixel-dataset"
    },
    {
        id: "Boxy",
        href: "https://boxy-dataset.com/boxy/"
    },
    {
        id: "TME Motorway",
        href: "http://cmp.felk.cvut.cz/data/motorway/"
    },
    {
        id: "TuSimple",
        href: "https://www.tusimple.com/"
    },
    {
        id: "UAH-DriveSet",
        href: "http://www.robesafe.uah.es/personal/eduardo.romera/uah-driveset/"
    },
    {
        id: "Unsupervised Llamas",
        href: "https://unsupervised-llamas.com/llamas/"
    },
    {
        id: "Dense Depth for Autonomous Driving",
        href: "https://github.com/TRI-ML/DDAD"
    },
    {
        id: "Canadian Adverse Driving Conditions",
        href: "http://cadcd.uwaterloo.ca/"
    },
    {
        id: "Street Hazards",
        href: "https://github.com/hendrycks/anomaly-seg"
    },
    {
        id: "Astyx HiRes 2019",
        href: "https://www.astyx.com/fileadmin/redakteur/dokumente/Astyx_Dataset_HiRes2019_specification.pdf"
    },
    {
        id: "A*3D",
        href: "https://github.com/I2RDL2/ASTAR-3D"
    },
    {
        id: "camvid",
        href: "https://www.kaggle.com/carlolepelaars/camvid"
    },
    {
        id: "Daimler Urban Segmentation",
        href: "https://computervisiononline.com/dataset/1105138608",
    },
    {
        id: "VPGNet",
        href: "https://arxiv.org/abs/1710.06288"
    },
    {
        id: "Toronto 3D",
        href: "https://openaccess.thecvf.com/content_CVPRW_2020/papers/w11/Tan_Toronto-3D_A_Large-Scale_Mobile_LiDAR_Dataset_for_Semantic_Segmentation_of_CVPRW_2020_paper.pdf"
    },
    {
        id: "Toronto City",
        href: "http://www.cs.toronto.edu/~byang/papers/Tcity_iccv17.pdf"
    },
    {
        id: "Synthia",
        href: "https://synthia-dataset.net/"
    },
    {
        id: "RANUS",
        href: "https://sites.google.com/site/gmchoe1/ranus"
    },
    {
        id: "One Thousand and One Hours",
        href: "https://arxiv.org/abs/2006.14480v2"
    },
    {
        id: "LIBRE",
        href: "https://arxiv.org/abs/2003.06129"
    },
    {
        id: "Stanford Track Collection",
        href: "https://cs.stanford.edu/people/teichman/stc/"
    },
    {
        id: "LiDAR-Video Driving Dataset",
        href: "https://openaccess.thecvf.com/content_cvpr_2018/papers/Chen_LiDAR-Video_Driving_Dataset_CVPR_2018_paper.pdf"
    },
    {
        id: "WoodScape",
        href: "https://paperswithcode.com/dataset/woodscape"
    },
    {
        id: "Raincouver",
        href: "https://ieeexplore.ieee.org/document/7970170"
    },
    {
        id: "TRoM",
        href: "https://ieeexplore.ieee.org/document/8317749"
    },
    {
        id: "Caltech Lanes",
        href: "http://www.mohamedaly.info/datasets/caltech-lanes"
    },
    {
        id: "Complex Urban Dataset",
        href: "https://irap.kaist.ac.kr/dataset/"
    },
    {
        id: "CCSAD",
        href: "https://www.researchgate.net/publication/277476726_Towards_Ubiquitous_Autonomous_Driving_The_CCSAD_Dataset"
    },
    {
        id: "Street Learn",
        href: "https://paperswithcode.com/dataset/streetlearn"
    },
    {
        id: "UTBM robot car",
        href: "https://epan-utbm.github.io/utbm_robocar_dataset/"
    },
    {
        id: "Multi Vehicle Stereo Event Camera",
        href: "https://daniilidis-group.github.io/mvsec/"
    },
    {
        id: "AMUSE",
        href: "http://www.cvl.isy.liu.se/research/datasets/amuse/"
    },
    {
        id: "Cheddar Gorge Dataset",
        href: "https://www.researchgate.net/publication/228428941_The_Cheddar_Gorge_Data_Set"
    },
    {
        id: "The Annotated Laser Dataset",
        href: "https://journals.sagepub.com/doi/pdf/10.1177/0278364910389840"
    },
    {
        id: "DDD 17",
        href: "https://www.paperswithcode.com/dataset/ddd17"
    },
    {
        id: "BLVD",
        href: "https://paperswithcode.com/dataset/blvd"
    },
    {
        id: "FLIR Thermal Dataset",
        href: "https://www.flir.com/oem/adas/adas-dataset-form/"
    },
    {
        id: "Multispectral Object Detection",
        href: "https://deepai.org/publication/multispectral-object-detection-with-deep-learning"
    },
    {
        id: "CityPersons",
        href: "https://arxiv.org/abs/1702.05693"
    },
    {
        id: "Tsinghua Daimler Cyclist Detection",
        href: "http://www.gavrila.net/Datasets/Daimler_Pedestrian_Benchmark_D/Tsinghua-Daimler_Cyclist_Detec/tsinghua-daimler_cyclist_detec.html"
    },
    {
        id: "TDU Brussels Pedestrian",
        href: "https://www.researchgate.net/figure/Results-on-the-TUD-Brussels-Pedestrian-Dataset_fig13_321232691"
    },
    {
        id: "ETH Pedestrian",
        href: "https://paperswithcode.com/dataset/eth"
    },
    {
        id: "Daimler Pedestrian",
        href: "http://www.gavrila.net/Datasets/Daimler_Pedestrian_Benchmark_D/daimler_pedestrian_benchmark_d.html"
    },
    {
        id:"GROUNDED Localizing Ground Penetrating Radar (LGPR) Evaluation Dataset",
        href: "https://lgprdata.com/"
    },
    {
        id:"highD",
        href: "https://www.highd-dataset.com/"
    },
    {
        id:"inD",
        href: "https://www.ind-dataset.com/"
    },
    {
        id:"rounD",
        href: "https://www.round-dataset.com/"
    },
    {
        id:"TAF-BW",
        href: "https://github.com/fzi-forschungszentrum-informatik/test-area-autonomous-driving-dataset"
    },
    {
        id:"R3 Driving Dataset",
        href: "https://github.com/rllab-snu/R3-Driving-Dataset",
        relatedPaper: "https://arxiv.org/pdf/2109.07995.pdf"
        
    },
    {
        id: "EISATS",
        href: "https://ccv.wordpress.fos.auckland.ac.nz/eisats/",
        size_storage: "",
        size_hours: "",
        frames: "",
        numberOfScenes: "",
        samplingRate: "",
        lengthOfScenes: "",
        sensors: "",
        sensorDetail: "",
        benchmark: "",
        annotations: "",
        licensing: "",
        relatedDatasets: "",
        publishDate:" ",
        lastUpdate: "",
        relatedPaper: ""
    },
    {
        id: "Ford CAMPUS",
        href: "https://www.researchgate.net/publication/220122924_Ford_Campus_vision_and_lidar_data_set",
        size_storage: "",
        size_hours: "",
        frames: "",
        numberOfScenes: "",
        samplingRate: "",
        lengthOfScenes: "",
        sensors: "",
        sensorDetail: "",
        benchmark: "",
        annotations: "",
        licensing: "",
        relatedDatasets: "",
        publishDate:" ",
        lastUpdate: "",
        relatedPaper: ""
    },
    {
        id: "Argoverse Stereo",
        href: "https://www.argoverse.org/data.html#stereo-link",
        size_storage: "14.2",
        size_hours: "",
        frames: "",
        numberOfScenes: "",
        samplingRate: "",
        lengthOfScenes: "",
        sensors: "",
        sensorDetail: "",
        benchmark: "stereo",
        annotations: "",
        licensing: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Public (CC BY-NC-SA 4.0)",
        relatedDatasets: "Argoverse 3D Tracking",
        publishDate:"2021.04",
        lastUpdate: "",
        relatedPaper: ""
    },
    {
        id: "uniD",
        href: "https://www.unid-dataset.com/",
        size_storage: "",
        size_hours: "",
        frames: "",
        numberOfScenes: "",
        samplingRate: "",
        lengthOfScenes: "",
        sensors: "",
        sensorDetail: "",
        benchmark: "",
        annotations: "",
        licensing: "",
        relatedDatasets: "",
        publishDate:" ",
        lastUpdate: "",
        relatedPaper: ""
    },
    
    {
        id: "exiD",
        href: "https://www.exid-dataset.com/",
        size_storage: "",
        size_hours: "",
        frames: "",
        numberOfScenes: "",
        samplingRate: "",
        lengthOfScenes: "",
        sensors: "",
        sensorDetail: "",
        benchmark: "",
        annotations: "",
        licensing: "",
        relatedDatasets: "",
        publishDate:" ",
        lastUpdate: "",
        relatedPaper: ""
    },
    
    {
        id: "The USyd Campus Dataset",
        href: "http://its.acfr.usyd.edu.au/datasets/usyd-campus-dataset/",
        size_storage: "",
        size_hours: "40",
        frames: "",
        numberOfScenes: "",
        samplingRate: "",
        lengthOfScenes: "",
        sensors: "6 cameras, lidar, gps, imu, wheel encoders",
        sensorDetail: "GMSL cameras 30, 60 Hz, VLP-16 10 Hz",
        benchmark: "",
        annotations: "Semantic Segmentation",
        licensing: "",
        relatedDatasets: "",
        publishDate:"05 June 2020",
        lastUpdate: "",
        relatedPaper: "https://ieeexplore.ieee.org/document/9109704"
    },
];

export { rows };
