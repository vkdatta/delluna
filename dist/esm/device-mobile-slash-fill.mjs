export const name="device-mobile-slash-fill";
export const id="dl_e99dc20109ca4b1fbcc5";
export const url=new URL("../icons/device-mobile-slash-fill.svg?v=bd52feec304db20c33d9398337c3a634d14c2b8fc0a6bd5006182f95e500dcad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
