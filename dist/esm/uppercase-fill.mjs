export const name="uppercase-fill";
export const id="dl_b677fcc0d1f4c8a1f1ca";
export const url=new URL("../icons/uppercase-fill.svg?v=b13ce8cb5868446ded886c04ed2aa8de2903fdad282a7d30ce0a5b8bb160f91c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
