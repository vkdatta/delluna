export const name="storefront-bold";
export const id="dl_cafdfa859408494b9249";
export const url=new URL("../icons/S/storefront-bold.svg?v=c10db3f6f1cb38a8d8678f9e4e42dd9661a6053412595d50ccc8a057fa23561e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
