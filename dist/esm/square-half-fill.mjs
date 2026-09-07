export const name="square-half-fill";
export const id="dl_020bca975a4944b29b6d";
export const url=new URL("../icons/S/square-half-fill.svg?v=b7de8273c0735917754a13552d4a1d84f5e4cbe40c8c1458e84ca1c4d0644628",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
