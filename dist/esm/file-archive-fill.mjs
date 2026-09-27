export const name="file-archive-fill";
export const id="dl_3d3b83a490704a47ad1a";
export const url=new URL("../icons/file-archive-fill.svg?v=7dd0730720f9da19f7263609ed64b9bc4387ece9d8b74cc081817ae1e177f425",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
