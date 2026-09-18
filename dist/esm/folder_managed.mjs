export const name="folder_managed";
export const id="dl_c7a9e38131a04e84a3f9";
export const url=new URL("../icons/folder_managed.svg?v=81722ab7a7ad3766b0779af968e432de7ff923003e7bc38057a39aac164f026d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
