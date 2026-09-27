export const name="lucid_1-bluetooth";
export const id="dl_a0c59bf919354f9dba54";
export const url=new URL("../icons/lucid_1-bluetooth.svg?v=af3e12cce6eee668794bce3d750053c75ebf002e5f9ce119d3db3daf86bd01b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
