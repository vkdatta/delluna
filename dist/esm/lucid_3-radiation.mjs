export const name="lucid_3-radiation";
export const id="dl_e9b4c4a0e61348eea44b";
export const url=new URL("../icons/lucid_3-radiation.svg?v=7500f5d4c49c7c771ffbb0d9974f5003579459e189c644820027771d49e844e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
