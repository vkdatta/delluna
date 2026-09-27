export const name="paw-print-fill";
export const id="dl_be5de06b0cf949a2b5c0";
export const url=new URL("../icons/paw-print-fill.svg?v=78120fb98502852763c543cd406787d0bb059e037dae43800f564026ea1a8fb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
