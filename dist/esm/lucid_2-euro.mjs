export const name="lucid_2-euro";
export const id="dl_7774b7fa4e6345c2b134";
export const url=new URL("../icons/lucid_2-euro.svg?v=21d0b0dee4133bcaf8a46a24c564ae5587840b4a7d9cc6bfa549711db693f37a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
