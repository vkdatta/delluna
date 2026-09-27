export const name="lucid_2-corner-down-right";
export const id="dl_4ce79ef01d8f4b5b87a3";
export const url=new URL("../icons/lucid_2-corner-down-right.svg?v=138fb4b26a2679a19cf19ab752e5f1c19cd77034b0230c9c4f67291751f31312",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
