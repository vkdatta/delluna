export const name="running_with_errors";
export const id="dl_e4ce7e342daf36a79c65";
export const url=new URL("../icons/running_with_errors.svg?v=1b7eef128ddb8768186a3f9c7441cd24dee5851a06d2ce321b44767389e7371f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
