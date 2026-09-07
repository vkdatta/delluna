export const name="face-mask-thin";
export const id="dl_e9bd931912f644c49883";
export const url=new URL("../icons/face-mask-thin.svg?v=5829270ad593cdaea7fa4faf530449b54ebf31d1d97f92271ab64091a0026334",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
