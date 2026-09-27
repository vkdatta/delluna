export const name="syringe-fill";
export const id="dl_40da3f458a8c8969f080";
export const url=new URL("../icons/syringe-fill.svg?v=c744bab2f29c5e74254b98432518ee1df7cc4a48ed45235adfd620633436620b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
