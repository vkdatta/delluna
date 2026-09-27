export const name="23mp";
export const id="dl_cb1249b910f99e7821e5";
export const url=new URL("../icons/23mp.svg?v=03ce56a58480edc624347ac0b70a3c4f9746326a212756bf907d687aebfda737",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
