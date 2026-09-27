export const name="cursor-text";
export const id="dl_0a0ff3aee1c247349040";
export const url=new URL("../icons/cursor-text.svg?v=e91c95d10db1cb9ed78fa07288713820c62d1e6319893266c008f0f4262faca1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
