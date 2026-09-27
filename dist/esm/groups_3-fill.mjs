export const name="groups_3-fill";
export const id="dl_50bef9c7afac26241382";
export const url=new URL("../icons/groups_3-fill.svg?v=d007d16e77d7359ef75894ba03b939b99f581e705e173188b446dcbee353ee1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
