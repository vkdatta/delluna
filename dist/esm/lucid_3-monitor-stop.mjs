export const name="lucid_3-monitor-stop";
export const id="dl_7c209dcb486a4aeb8c85";
export const url=new URL("../icons/lucid_3-monitor-stop.svg?v=58894ce6f27243592b0c7a0fb09d492f94ab2d0b2c73a3d9f7156f06ca650eef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
