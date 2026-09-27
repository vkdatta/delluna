export const name="view_compact_alt-fill";
export const id="dl_464099b4d46294caa6b8";
export const url=new URL("../icons/view_compact_alt-fill.svg?v=537f9bc0b798fdd6562879e4fc7b8677caad8b6ee720033a4e7c8c6ad6d02a77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
