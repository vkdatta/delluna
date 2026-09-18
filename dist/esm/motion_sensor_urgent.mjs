export const name="motion_sensor_urgent";
export const id="dl_81cb5b05e0de452fad54";
export const url=new URL("../icons/motion_sensor_urgent.svg?v=e626acda440a2c78e375a103a22b666206bf7148842eb1da1d182080d50a0890",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
