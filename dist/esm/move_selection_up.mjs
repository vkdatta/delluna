export const name="move_selection_up";
export const id="dl_e3613dfe359a7e8a5b73";
export const url=new URL("../icons/move_selection_up.svg?v=8427a643f0a47f96cc568cf43a59227fe5fa9cc26ca53dd6b65ce7ee6daf35a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
