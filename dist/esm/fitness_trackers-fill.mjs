export const name="fitness_trackers-fill";
export const id="dl_2f136a698b9f46309fe0";
export const url=new URL("../icons/fitness_trackers-fill.svg?v=f63af7bc12b5be43ad3eb63454cb3563c4365842a3d56d8a52348e87462157ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
