export const name="file-md-duotone";
export const id="dl_29b753b65408441a8703";
export const url=new URL("../icons/file-md-duotone.svg?v=6908886cf5d254af56e7697202f4f4987364fad2317d329981f7bfb11ba5ab96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
