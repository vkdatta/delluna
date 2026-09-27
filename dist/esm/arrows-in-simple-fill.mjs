export const name="arrows-in-simple-fill";
export const id="dl_ee902b8b6c234ee2b6ca";
export const url=new URL("../icons/arrows-in-simple-fill.svg?v=5a32241da9a10bd66b829cf775f40f2ed56eb5ce83a0ffc453c9ad82142800b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
