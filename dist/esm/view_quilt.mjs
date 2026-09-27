export const name="view_quilt";
export const id="dl_8b3eaa3ca4bb9d18f153";
export const url=new URL("../icons/view_quilt.svg?v=b0fcc000226c2a79f2711b5c5ee952f1376190adebd6bc2c0db48af4cc3dbd02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
