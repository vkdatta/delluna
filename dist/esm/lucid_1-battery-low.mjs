export const name="lucid_1-battery-low";
export const id="dl_c35d01c2b995442282c3";
export const url=new URL("../icons/lucid_1-battery-low.svg?v=fc52c279b63ed73798f62a3ed91a4671016fdd24ca0a407920bc7b6e4a72ccf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
