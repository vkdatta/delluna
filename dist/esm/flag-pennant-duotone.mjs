export const name="flag-pennant-duotone";
export const id="dl_df93ca87da124f87a1eb";
export const url=new URL("../icons/flag-pennant-duotone.svg?v=e3821e1391c68586fbd38b61f29fdcf4872a45dc4514392b25dab79a5f892029",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
