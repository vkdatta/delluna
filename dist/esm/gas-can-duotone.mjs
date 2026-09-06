export const name="gas-can-duotone";
export const id="dl_1e4635c46ab140eda849";
export const url=new URL("../icons/gas-can-duotone.svg?v=5f6df913137acd5ac703d49c74d76639d80fb8ccd3babe783b67bfa161f9bab1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
