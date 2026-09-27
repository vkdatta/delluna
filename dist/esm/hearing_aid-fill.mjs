export const name="hearing_aid-fill";
export const id="dl_68adf5b39381dd033c1d";
export const url=new URL("../icons/hearing_aid-fill.svg?v=8044c19013ac43f756b13eb57f872dc0583277f29d04febe6a9c540d8be0bd3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
