export const name="help_clinic-fill";
export const id="dl_66fd21c792ca4b32a7ce";
export const url=new URL("../icons/help_clinic-fill.svg?v=8420801c53c49044f5885bf393ef1120285a269edfbe52d4acdb7d78cff02863",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
