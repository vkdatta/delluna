export const name="lucid_3-signpost-big";
export const id="dl_c2ecc450dd9d46b4a1a1";
export const url=new URL("../icons/lucid_3-signpost-big.svg?v=7c66b1cfa2ebd39b6e514eaa6f301add44446769fb281abd66727e8097b342a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
