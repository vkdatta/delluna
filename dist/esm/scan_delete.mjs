export const name="scan_delete";
export const id="dl_cede3c8339b807b47acf";
export const url=new URL("../icons/scan_delete.svg?v=3165c502f2940eb551998436de784bee6755441ed937b1168a307c9c6f487778",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
