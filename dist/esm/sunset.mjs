export const name="sunset";
export const id="dl_bdd1bed5768240b9ada5";
export const url=new URL("../icons/sunset.svg?v=245a0852d94d20b9d97c145d9416c91f8dc63e75df91a93f1fe2f87130329e77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
