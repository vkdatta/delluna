export const name="parentheses";
export const id="dl_7d22dcda5c59436c91e4";
export const url=new URL("../icons/parentheses.svg?v=f0e83e69274aec7250f5a036827243b9525fb87b280cc01eb576a7716d37e67b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
