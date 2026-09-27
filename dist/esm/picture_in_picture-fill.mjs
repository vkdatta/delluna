export const name="picture_in_picture-fill";
export const id="dl_e6ef2fce978bb90b6b8b";
export const url=new URL("../icons/picture_in_picture-fill.svg?v=8081dd30e6da9eef451dffb4a57ae71eee5ac1771a56b30b220301647836d422",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
