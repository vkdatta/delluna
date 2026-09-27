export const name="image-broken-thin";
export const id="dl_41b5e29cc3c04ab7ae85";
export const url=new URL("../icons/image-broken-thin.svg?v=0112b3c0d390a652127980306c960ac0827653b9a83e1113acd779e9ac112952",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
