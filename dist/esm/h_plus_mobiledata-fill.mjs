export const name="h_plus_mobiledata-fill";
export const id="dl_b77ee3c03333cd9bf327";
export const url=new URL("../icons/h_plus_mobiledata-fill.svg?v=28d4b796a6d8b2a9e7d5745be24e158fb2b46af4f4190cdb285769d41e669a39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
