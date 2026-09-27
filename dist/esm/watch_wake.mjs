export const name="watch_wake";
export const id="dl_e058b32f27eb23d8a625";
export const url=new URL("../icons/watch_wake.svg?v=1c656cb3d770a3a1722a48b7b8748c833a350a88d188afa9d01057d76b0886ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
