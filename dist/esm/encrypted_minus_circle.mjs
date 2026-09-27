export const name="encrypted_minus_circle";
export const id="dl_e7ce39d0800505b7a45c";
export const url=new URL("../icons/encrypted_minus_circle.svg?v=7454dec8561c89e3f05444545db243a70d3d67c9f3ce26406d5851eeb8c286ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
