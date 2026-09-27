export const name="speed_camera-fill";
export const id="dl_66b0b7975bc16288ee17";
export const url=new URL("../icons/speed_camera-fill.svg?v=0e818c3c5fa00b2c89d8a0b91e370f86c633d9d4bb2fb6bfa4bb5bf93bb5c7b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
