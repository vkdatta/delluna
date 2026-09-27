export const name="play_circle";
export const id="dl_64cfb649cdb5de695f22";
export const url=new URL("../icons/play_circle.svg?v=d516c222e95c518f908fc6ef9db2b5ed411486216f0bf3c8a2834050e986be3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
