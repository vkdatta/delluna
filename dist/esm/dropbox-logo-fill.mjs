export const name="dropbox-logo-fill";
export const id="dl_9e1383ea6e1c4ee5afe3";
export const url=new URL("../icons/dropbox-logo-fill.svg?v=16c3f651b273120be5f9be61996c3d414cc829d3dab271c79df197682bdce5eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
