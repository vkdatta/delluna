export const name="bowling-ball-fill";
export const id="dl_c8008623908542af865c";
export const url=new URL("../icons/bowling-ball-fill.svg?v=fad099c9a415cd490733b98020cf6eeafeec2a81c956b7909b48a5266af67d35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
