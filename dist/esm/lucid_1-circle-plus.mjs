export const name="lucid_1-circle-plus";
export const id="dl_2b21c5c0b0034b9dae81";
export const url=new URL("../icons/lucid_1-circle-plus.svg?v=736c9e9dafa357e768cab1d74649b64e51c2eec0e387b7d1e330dd94a49797a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
