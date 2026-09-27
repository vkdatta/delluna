export const name="21mp-fill";
export const id="dl_70a5494ab2e1cca08f40";
export const url=new URL("../icons/21mp-fill.svg?v=db0cd5b130fd24b636db62f408b7f5c8b6e937f2e7f582bedc0876bdad78e307",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
