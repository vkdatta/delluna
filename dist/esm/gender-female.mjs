export const name="gender-female";
export const id="dl_8c833485648f4b69a1b3";
export const url=new URL("../icons/gender-female.svg?v=1c7f5c2e4ef21cd634b2f5d3cbe88d18750fd38344bfa584c8bd51e9015e2a70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
