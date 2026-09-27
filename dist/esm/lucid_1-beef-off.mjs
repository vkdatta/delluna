export const name="lucid_1-beef-off";
export const id="dl_a2ddcda247f541dd8f04";
export const url=new URL("../icons/lucid_1-beef-off.svg?v=969b012a06f8fa22710e255f0050cbcc733a6c5730c7979396857aaa284bf162",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
