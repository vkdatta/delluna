export const name="axe-fill";
export const id="dl_288ded07b14d46549d24";
export const url=new URL("../icons/axe-fill.svg?v=ce23e9f81c1b92be1e289c71a68212b47cdb7bb833c2ef8e74405c17694c18cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
