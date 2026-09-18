export const name="filter_center_focus";
export const id="dl_7ad83370ae3c4101be74";
export const url=new URL("../icons/filter_center_focus.svg?v=48e78d2da07584235307944fe45439c8cb3d19d61a24a84d9c7a62bcf4b6ef8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
