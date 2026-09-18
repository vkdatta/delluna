export const name="smart_card_reader";
export const id="dl_b71dc3e9d1d8408bbfb0";
export const url=new URL("../icons/S/smart_card_reader.svg?v=839ae21e7f037cd70cbdce2974d63a13e14e24a67e6ef536ec9ed04b0ec1de3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
