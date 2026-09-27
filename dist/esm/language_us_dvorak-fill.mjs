export const name="language_us_dvorak-fill";
export const id="dl_fc557681b224fb0e7f65";
export const url=new URL("../icons/language_us_dvorak-fill.svg?v=e52e2a2239bb061f829fa47f1f3f7ab58f6ebf2b3161083fa53846cfda5608a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
