export const name="factory-fill";
export const id="dl_d2f412e63c074e108d0d";
export const url=new URL("../icons/factory-fill.svg?v=2ec898ed40e9958ed0243a204191520f2324dd573576446804794d573a5da5d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
