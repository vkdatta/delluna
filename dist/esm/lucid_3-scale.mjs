export const name="lucid_3-scale";
export const id="dl_3e36b5ed8c5f4c83a1b6";
export const url=new URL("../icons/lucid_3-scale.svg?v=de64fd60aed831d1280cd5851382f31668d8c711c39bd915b4c1fb3855f17713",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
