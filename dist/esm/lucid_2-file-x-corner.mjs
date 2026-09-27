export const name="lucid_2-file-x-corner";
export const id="dl_a22e18aa8ab1434292d0";
export const url=new URL("../icons/lucid_2-file-x-corner.svg?v=35a99c14fde2f7bed19b98e03413a0e1409a60ad7cce59fb32f6623bf45d7172",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
