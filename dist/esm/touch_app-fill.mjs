export const name="touch_app-fill";
export const id="dl_0a5cdd7bcaf34f61be0a";
export const url=new URL("../icons/touch_app-fill.svg?v=24ad71ff03a7f7bd6090c62f89402616c2b551c7e3f00594419493f54ee33f33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
