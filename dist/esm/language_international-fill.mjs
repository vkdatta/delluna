export const name="language_international-fill";
export const id="dl_b63b2f648f8e8e28327f";
export const url=new URL("../icons/language_international-fill.svg?v=c0b9e3ba638ad2a9a2d5fe7aa08be74c2113fa0b9e854df2fbf12ce0eade9793",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
