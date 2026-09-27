export const name="wechat-logo-thin";
export const id="dl_404a6a51b7f427b0234a";
export const url=new URL("../icons/wechat-logo-thin.svg?v=ae8c5eb2420b41856e7e8215fa1fb1a5524e54e93d0c8a6a8b74a37087d76d1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
