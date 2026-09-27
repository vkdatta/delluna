export const name="upload-simple-bold";
export const id="dl_1d0eb3c1531a94d0ccf0";
export const url=new URL("../icons/upload-simple-bold.svg?v=306de0934d79cd740520ab893e29b3bdb6162301681b9a5da781014fc89a33b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
