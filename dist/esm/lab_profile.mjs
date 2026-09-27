export const name="lab_profile";
export const id="dl_6bcb2045db59ccaf5dd1";
export const url=new URL("../icons/lab_profile.svg?v=96eb25a6ebc65ef95ddcf854b26fbef6d24bd5ca0603b7e9d724915419a3ece8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
