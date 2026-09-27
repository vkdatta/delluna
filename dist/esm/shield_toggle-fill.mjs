export const name="shield_toggle-fill";
export const id="dl_c498a96af4d80c82c0f7";
export const url=new URL("../icons/shield_toggle-fill.svg?v=2709d08d68826d4c7f07a13c18f4ca1130691617e4a176b005ac8581e15ec271",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
