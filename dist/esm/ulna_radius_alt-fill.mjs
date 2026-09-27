export const name="ulna_radius_alt-fill";
export const id="dl_fbd9579f5e8e108842d1";
export const url=new URL("../icons/ulna_radius_alt-fill.svg?v=caf358a588f314743e9401cedff6a6ad347969343383717cae60889b51ce932d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
