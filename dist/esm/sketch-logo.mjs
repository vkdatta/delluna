export const name="sketch-logo";
export const id="dl_d7cf9bef0cad78ad9b75";
export const url=new URL("../icons/sketch-logo.svg?v=cd115295b579df14892dc6408d536103a933485625d93019c460a1688a7573d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
