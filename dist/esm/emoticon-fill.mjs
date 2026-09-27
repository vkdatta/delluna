export const name="emoticon-fill";
export const id="dl_d7aad5a008faadfec14c";
export const url=new URL("../icons/emoticon-fill.svg?v=eb1916a2f4d99c78a8a1324b439ee444448ba962543377f54cbb1f3add8eaf44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
