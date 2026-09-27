export const name="fire_check-fill";
export const id="dl_527c338a783f11e04f06";
export const url=new URL("../icons/fire_check-fill.svg?v=c12cd200b7d244f43bea30653aada606d553f899a407be0889c28bb02e027349",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
