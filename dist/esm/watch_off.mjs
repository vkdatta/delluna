export const name="watch_off";
export const id="dl_ab8e818cf55e424786fc";
export const url=new URL("../icons/W/watch_off.svg?v=c83c6733673fe1b85d34f6296af988a9a22e2e026bc3bb3c70988fc7e4d9b7f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
