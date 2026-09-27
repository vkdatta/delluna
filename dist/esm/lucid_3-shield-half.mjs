export const name="lucid_3-shield-half";
export const id="dl_0272d290ea414b918489";
export const url=new URL("../icons/lucid_3-shield-half.svg?v=d8dd7287244a062f391f071d3c872bd06e62ac58f73d156e12e47c04b333633c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
