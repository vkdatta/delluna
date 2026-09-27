export const name="frame_person-fill";
export const id="dl_9c059283f608fe9b3a47";
export const url=new URL("../icons/frame_person-fill.svg?v=749f9becad3dd1c786e0d9aa0dcc24bfa23863ab47795ff957b4ca410cc8cda8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
