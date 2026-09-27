export const name="brightness_1-fill";
export const id="dl_d9d4fa3331d126dfc52c";
export const url=new URL("../icons/brightness_1-fill.svg?v=8010080cc7a56f433eec410d3fedf7099195da3f7e3b784dec655bcc5519a7de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
