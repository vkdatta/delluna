export const name="less-than-or-equal-thin";
export const id="dl_7e63014de59e482cb9c3";
export const url=new URL("../icons/less-than-or-equal-thin.svg?v=9b1802f9d2172fc3c1df459b197ee572ca675ea9a6b9c530c580384a9f1493aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
