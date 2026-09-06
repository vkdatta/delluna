export const name="gavel-fill";
export const id="dl_b5752b77645f44eaae95";
export const url=new URL("../icons/gavel-fill.svg?v=3c9016ec3e37ed09090f38cffb6247fadf0cab18ddcd3cbb23bf2609e0e05c18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
