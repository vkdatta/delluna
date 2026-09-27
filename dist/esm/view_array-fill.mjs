export const name="view_array-fill";
export const id="dl_c415714fc039048c2a24";
export const url=new URL("../icons/view_array-fill.svg?v=2637ae770875c3edac77878f69631e9c83acede49c01c46947ad3956463fa904",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
