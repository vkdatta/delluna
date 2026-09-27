export const name="picnic-table-thin";
export const id="dl_4088dfffa508402eb743";
export const url=new URL("../icons/picnic-table-thin.svg?v=c0678a7ec3d5c9d5ef5734d57a7e4997e11419c7f58c5d7625b03b401fc30be2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
