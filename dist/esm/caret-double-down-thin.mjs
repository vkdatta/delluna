export const name="caret-double-down-thin";
export const id="dl_5dbed5c2c44e453c8e9e";
export const url=new URL("../icons/caret-double-down-thin.svg?v=f23a331d6109e40b8778d21fe60521f5739d34adcee604dddba0abaf7fcc7938",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
