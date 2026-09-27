export const name="replace_video-fill";
export const id="dl_a81026595ab1b3ab9374";
export const url=new URL("../icons/replace_video-fill.svg?v=128160d544cf073fc4afbd95075f02397d1e2eedb371f0aa07b8c19696628ca1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
