export const name="signal_cellular_off-fill";
export const id="dl_6afb659aee854a75aa9e";
export const url=new URL("../icons/signal_cellular_off-fill.svg?v=7aa6cd4d64d3bb9833312aa0443160ff53ef227b0fd862d83f7d0c6c92be0c24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
