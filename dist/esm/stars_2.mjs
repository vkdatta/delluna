export const name="stars_2";
export const id="dl_c07588b8eb9f35678aae";
export const url=new URL("../icons/stars_2.svg?v=fbef34bc6985f3555dc24f39db693b390f255f8283b75a5d575231a40208dd2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
