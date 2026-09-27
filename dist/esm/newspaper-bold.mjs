export const name="newspaper-bold";
export const id="dl_770371e0eafd4bd8b3d1";
export const url=new URL("../icons/newspaper-bold.svg?v=9f4e217e0ee3a70223756a60e9b1dbe75599b1d2491ccc4fab532e40b348c1fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
