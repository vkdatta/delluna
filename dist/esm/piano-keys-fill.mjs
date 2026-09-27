export const name="piano-keys-fill";
export const id="dl_4adefd7c55aa48a0b20f";
export const url=new URL("../icons/piano-keys-fill.svg?v=9233b0d3a11b9642e7655b4e9670a16836135b0217d0f524e1cf4a4d5f42d085",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
