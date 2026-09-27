export const name="crosshair-simple-fill";
export const id="dl_6c5da3710c184d37907a";
export const url=new URL("../icons/crosshair-simple-fill.svg?v=194c31a71dbc7977780926e0e44265cf45598d62a27a52c4515c0c3bc97e68d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
