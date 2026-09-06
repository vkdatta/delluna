export const name="lightning-thin";
export const id="dl_f30ee5122fb64707a2cf";
export const url=new URL("../icons/lightning-thin.svg?v=f2dbd736929d1093d820bb25f2da7a249528d9905060cbadcb243b2628a8ed2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
