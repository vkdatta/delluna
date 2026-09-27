export const name="lucid_2-glasses";
export const id="dl_046f7648b58c4bf69ba0";
export const url=new URL("../icons/lucid_2-glasses.svg?v=b53b0e1157b4c1c36e3fda1ee778ecb5591934e5741dbefb3440eeb86b42028e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
