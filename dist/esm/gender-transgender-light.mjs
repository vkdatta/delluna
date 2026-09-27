export const name="gender-transgender-light";
export const id="dl_cd27d8ec280a43328626";
export const url=new URL("../icons/gender-transgender-light.svg?v=18a31ca0e5a285c47a2a355b7123e54ae75eb600a0f4cf27044b3913299a30f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
