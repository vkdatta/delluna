export const name="nest_wake_on_approach";
export const id="dl_20b610a1429cad814d6d";
export const url=new URL("../icons/nest_wake_on_approach.svg?v=cdb398f51740313a679486245c0ac436c4ec947bfa3145085fdd6a007bfd37bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
