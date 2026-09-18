export const name="payments";
export const id="dl_c57286d9b17e49a18ca3";
export const url=new URL("../icons/P/payments.svg?v=ce93e48023429b52b2bc059847b9149d1291b4910485cbd313490795abed2264",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
