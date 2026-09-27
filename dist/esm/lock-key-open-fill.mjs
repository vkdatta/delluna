export const name="lock-key-open-fill";
export const id="dl_ed52b268a26046debb9b";
export const url=new URL("../icons/lock-key-open-fill.svg?v=f7b982c141c91b9e3ac6726bc4182c7e52a9f3d33c2b524a182a546aec9c31c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
