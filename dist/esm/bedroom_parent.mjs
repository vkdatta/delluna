export const name="bedroom_parent";
export const id="dl_1d1e112982a8404d96dc";
export const url=new URL("../icons/B/bedroom_parent.svg?v=6efb53fea74ed0434a27e4d97ce63ffc5455d979d21aad950f16ec962f29a185",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
