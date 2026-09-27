export const name="help_clinic-fill";
export const id="dl_0bb27f7544b786f640b9";
export const url=new URL("../icons/help_clinic-fill.svg?v=0132c80ec621e3858315c1e9c57529b69361980130bd48ef1360ca817966582c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
