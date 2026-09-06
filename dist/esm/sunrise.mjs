export const name="sunrise";
export const id="dl_b84688133b6c40e39dda";
export const url=new URL("../icons/sunrise.svg?v=d3ae0194a3add7d23ef7f0522e63ef716c0fe98e5481662b4a2895ec564d0d4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
