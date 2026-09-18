export const name="museum-fill";
export const id="dl_a131d9b3632545219ad1";
export const url=new URL("../icons/M/museum-fill.svg?v=f9a54cd34ec9d62d8810f8d9e15062ad290dfa56995e158881e8f1368db21342",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
