import axios from "axios";

interface Version {
  version: string;
}

const getVersion = async (): Promise<Version> => {
  return new Promise<Version>((resolve, reject) => {
    axios
      .get(
        "https://api.github.com/repos/krishnamodepalli/portfolio/releases/latest",
      )
      .then((res) => {
        if (res.status === 200) {
          const tagName = res.data.name as string;
          resolve({ version: tagName });
        } else  reject({ msg: "Cannot fetch the version" });
      });
  });
};

export default getVersion;
