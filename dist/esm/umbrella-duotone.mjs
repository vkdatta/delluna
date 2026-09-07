export const name="umbrella-duotone";
export const id="dl_357f42f9da144f389cef";
export const url=new URL("../icons/U/umbrella-duotone.svg?v=ca7f8aeeae85fcdab53cc6a68be3d64acf7de1f86fc7fe4e229c9ffd0fe0fef8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
