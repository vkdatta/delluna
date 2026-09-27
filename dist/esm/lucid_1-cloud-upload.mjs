export const name="lucid_1-cloud-upload";
export const id="dl_9616fa44a5bc424e8487";
export const url=new URL("../icons/lucid_1-cloud-upload.svg?v=836e2cf29d77c90f7f363806909158356e337d52b46798de233c6037005c8e63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
