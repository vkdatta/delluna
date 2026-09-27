export const name="earthquake-fill";
export const id="dl_cb895086cc7c6bacd537";
export const url=new URL("../icons/earthquake-fill.svg?v=e7d72f3580c53e20946d33d34a8b43cd2493242a36d9194af0c371921927b695",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
