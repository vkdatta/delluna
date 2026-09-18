export const name="ink_marker-fill";
export const id="dl_19f3301a0c2e417e8e12";
export const url=new URL("../icons/ink_marker-fill.svg?v=9ba9ea6268315e281acd411f233398bfbfdcf2a28ad25bbfa41c61548890ccf7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
