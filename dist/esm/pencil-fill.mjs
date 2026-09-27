export const name="pencil-fill";
export const id="dl_f1ce9b80084b4a208d2b";
export const url=new URL("../icons/pencil-fill.svg?v=c3cd4a133d21c590c6c6a394d13ca283dc68d9a31a825ae19ece06416f4fe76d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
