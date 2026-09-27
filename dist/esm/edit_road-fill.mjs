export const name="edit_road-fill";
export const id="dl_8e03151bc2b0a5ef78ad";
export const url=new URL("../icons/edit_road-fill.svg?v=e1c39ed4c5cb0950c45740e9d4078bbc1a2b8c7d7d9049bf918ff035381d1172",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
