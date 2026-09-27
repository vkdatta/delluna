export const name="carrot-fill";
export const id="dl_3797fb6ac7214d2e81ee";
export const url=new URL("../icons/carrot-fill.svg?v=58b8984a8a384f50bba4835a025df25a8c0b50cbf9cafe13a25af52ebf39de01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
