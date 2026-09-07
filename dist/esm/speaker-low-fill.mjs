export const name="speaker-low-fill";
export const id="dl_36dce1faad574801b6fc";
export const url=new URL("../icons/S/speaker-low-fill.svg?v=babd017b859a8efe860ec50fcddddd41e64969338402391d2a008475722c2a03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
