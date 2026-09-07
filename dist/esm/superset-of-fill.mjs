export const name="superset-of-fill";
export const id="dl_40fd97b5d0ab44fd8847";
export const url=new URL("../icons/S/superset-of-fill.svg?v=4a0e0f58ebb80df4e3af4719a130eb6135dd4e37b8464713052f3fc68f1de004",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
