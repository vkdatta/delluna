export const name="ventilator";
export const id="dl_c16c78aeb8a24b0dbf65";
export const url=new URL("../icons/V/ventilator.svg?v=2fcf19c1c289d3b37341d82b45642f09395d3a767bddc19a99300ddbf2b131b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
