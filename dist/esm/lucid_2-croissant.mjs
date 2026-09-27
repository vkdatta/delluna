export const name="lucid_2-croissant";
export const id="dl_f65963e3d38b4cc2bea4";
export const url=new URL("../icons/lucid_2-croissant.svg?v=2169da1a3172c1cd062d6cfc01d7c7636c629bbf88948d047e578ccea53d34a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
