export const name="lucid_2-credit-card-reader";
export const id="dl_1bab677e329049e9bfa1";
export const url=new URL("../icons/lucid_2-credit-card-reader.svg?v=4c1dd5f9c6abc4f852e01d7777aebb0bd16e65c64cee64cb1167da55d90e18aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
