export const name="caret-circle-up-down-thin";
export const id="dl_64dde4d012594daaab12";
export const url=new URL("../icons/caret-circle-up-down-thin.svg?v=a39323636668e953258744de98ce7f1e3a2ac9da650624cf0fdd78bdb78bc1fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
