export const name="volume_down-fill";
export const id="dl_675002380056e33a3f63";
export const url=new URL("../icons/volume_down-fill.svg?v=b68619ae2cd8875dc679bea6272299ad780d782a510a2019981a14290c456d95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
