export const name="nfc";
export const id="dl_f2609f4afa90468d6d16";
export const url=new URL("../icons/nfc.svg?v=00e45a3137c233089274addb548425c974b5c5f21e7ae1ae436ef722b2840d6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
