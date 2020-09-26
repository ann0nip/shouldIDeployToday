const API_URL = "https://shouldideploy.today/api?tz=America/Buenos_Aires";

shouldDeployToday = async () => {
  const req = new Request(API_URL);
  const data = await req.loadJSON();

  return data;
};

const title = "Should deploy today? 👨🏻‍💻";
const data = await shouldDeployToday();

const color_bg = data.shouldideploy ? "#FFF" : "#ff4136";
const color_title = data.shouldideploy ? "#999" : "#FFF";
const color_msg = "#000";

const widget = new ListWidget();
widget.backgroundColor = new Color(color_bg);

let w_title = widget.addText(title);
w_title.font = Font.title2();
w_title.textColor = new Color(color_title);

widget.addSpacer(10);

let w_msg = widget.addText(data.message);
w_msg.font = Font.title1();
w_msg.textColor = new Color(color_msg);

widget.presentMedium();
