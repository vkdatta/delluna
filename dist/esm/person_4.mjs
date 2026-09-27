export const name="person_4";
export const id="dl_9efdea1d403b78cd16bc";
export const url=new URL("../icons/person_4.svg?v=8cf103355a6f5f01a2a7e614263e7bd89c2cf47021bf5d273ab2a6488294b18f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
