export const name="touch_app";
export const id="dl_3a76f8248df2b9f8c50a";
export const url=new URL("../icons/touch_app.svg?v=698716928d5ae39399a4a25151d2c34113dfcecb72d81c94ca3e03c576a204e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
