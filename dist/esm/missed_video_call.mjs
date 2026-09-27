export const name="missed_video_call";
export const id="dl_b0583b1c153dacd33bed";
export const url=new URL("../icons/missed_video_call.svg?v=731cf7e4f21bd17a680e62fb8f5b8ead45614adb68927faf7dee10752bcda322",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
