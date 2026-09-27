export const name="wand_shine-fill";
export const id="dl_379bf8337d76acabd473";
export const url=new URL("../icons/wand_shine-fill.svg?v=b10981e89e60e4b83947cd3ddc29e64722154f912ccdfb5c28540e5b8251d3b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
