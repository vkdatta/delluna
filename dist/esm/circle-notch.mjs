export const name="circle-notch";
export const id="dl_d83c52c28a5c4345959d";
export const url=new URL("../icons/circle-notch.svg?v=7db6049b3b6f951dba2872d63c52f85c6de9ea95e7bda4d598c84bc443a5f035",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
