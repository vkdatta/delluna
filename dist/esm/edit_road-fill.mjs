export const name="edit_road-fill";
export const id="dl_aef76cf6a940ebe3d308";
export const url=new URL("../icons/edit_road-fill.svg?v=3ede6dda743161ff7ef67103d7aa3b06c81b258cec6886832657084cfc207fcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
