export const name="sunset";
export const id="dl_bdd1bed5768240b9ada5";
export const url=new URL("../icons/sunset.svg?v=80ecbd546075ad94de090b0b22dbd1c9e6530d1cc3b39ba7012c396d9a2f6449",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
