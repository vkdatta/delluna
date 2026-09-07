export const name="siren-duotone";
export const id="dl_b65917b933ae44d19a31";
export const url=new URL("../icons/S/siren-duotone.svg?v=b18deff2b28307ce1741407932330fd2a06d04acf4aae3e19377ec88ac4afe76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
