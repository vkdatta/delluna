export const name="lucid_3-move-diagonal-2";
export const id="dl_0d1a7bace9f74b90aa27";
export const url=new URL("../icons/lucid_3-move-diagonal-2.svg?v=1ae46a5fb0dacc0b7f6be4eeddb3fefc76adc81dd63c0938f257ac30627a4882",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
