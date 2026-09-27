export const name="thumb_up-fill";
export const id="dl_80a58024cc41167f5a8b";
export const url=new URL("../icons/thumb_up-fill.svg?v=338ab8635717844fa8a2ef7589a7f7e79e29cc0388ba505e37ed64cc00fde866",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
