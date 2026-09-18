export const name="manga";
export const id="dl_81c0c828175e429da189";
export const url=new URL("../icons/manga.svg?v=3d5b8f87338109d137e586fed0060c6bfd4f755a4f64c820bdb6522b57156487",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
