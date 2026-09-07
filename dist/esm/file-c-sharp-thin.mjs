export const name="file-c-sharp-thin";
export const id="dl_e5e187480f6e456dbe04";
export const url=new URL("../icons/file-c-sharp-thin.svg?v=a56caa65f90aaffdce96bb44d7fbd081ff76c8847e39dbb4b92fc4da25bd6d28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
