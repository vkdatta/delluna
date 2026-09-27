export const name="placeholder";
export const id="dl_5f2ce84ad16e419da8ea";
export const url=new URL("../icons/placeholder.svg?v=c6145e1c05e0e60d584509316afa7c03ec35536a9b1e2f01a2b0adcbbacb5b5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
