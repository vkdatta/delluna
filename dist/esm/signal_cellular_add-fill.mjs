export const name="signal_cellular_add-fill";
export const id="dl_bdd9a54c72b577e8aecb";
export const url=new URL("../icons/signal_cellular_add-fill.svg?v=1ba42a399c1d04a693cdb3688125be36540915fed7b5133ef8d285e09a06f5aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
