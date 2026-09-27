export const name="format_shapes-fill";
export const id="dl_02b7970b16e3ff44ebf7";
export const url=new URL("../icons/format_shapes-fill.svg?v=1f54410aae0b15af237a3797fa888c2ff8a7959a6b7eb4804a2c16ab0dc52b69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
