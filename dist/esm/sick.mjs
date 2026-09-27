export const name="sick";
export const id="dl_dc26a9d9c2c8ec29dd11";
export const url=new URL("../icons/sick.svg?v=a1b1ef37b3527ff0d03074f92b5a37a443460ef8e5b128919bfe23bee66c3d27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
