export const name="helicopter";
export const id="dl_1bac68f672b131c1eaff";
export const url=new URL("../icons/helicopter.svg?v=2712eb8b0e709663918e018093aea9a9516ff8000f1f54ccbdeb94605978f8fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
