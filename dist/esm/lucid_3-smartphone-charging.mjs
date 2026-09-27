export const name="lucid_3-smartphone-charging";
export const id="dl_10642f8432e64ca6b773";
export const url=new URL("../icons/lucid_3-smartphone-charging.svg?v=44ab91e6fecbef9ed8d27acc58cd2d3f690198494108f8d16b36b95185f3f5c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
