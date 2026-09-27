export const name="toolbox-duotone";
export const id="dl_3db2fad95c497a5c370d";
export const url=new URL("../icons/toolbox-duotone.svg?v=6d0e91b822d68e45627aa2db5fd5c24024de47ad16e8325dd8b63265b2bbaf38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
