export const name="assignment_ind-fill";
export const id="dl_fc5ef58d137b51ed0d56";
export const url=new URL("../icons/assignment_ind-fill.svg?v=bc269aae80ee478d67241c95e53bae8f2be3d7c3c1dcb1193b0d82effc18ab6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
