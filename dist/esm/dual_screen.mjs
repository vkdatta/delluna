export const name="dual_screen";
export const id="dl_26ca2e4ab948dbc1395e";
export const url=new URL("../icons/dual_screen.svg?v=76f37ba113743fc4fb559816d86cce2d10c6bb6e666ccceae20e8772f86845d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
