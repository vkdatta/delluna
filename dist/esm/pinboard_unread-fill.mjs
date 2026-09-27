export const name="pinboard_unread-fill";
export const id="dl_f6cc0b127d9df89666cd";
export const url=new URL("../icons/pinboard_unread-fill.svg?v=0fe30ad226f0fdd7a4c0b28942c97bb8a592f68ee46cafd64f459ec3a4a2db39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
