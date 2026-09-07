export const name="square-sigma";
export const id="dl_f9903258a8ab439a9f5d";
export const url=new URL("../icons/square-sigma.svg?v=c4332b39aa42aa9e24904c245f9463e4d1c2c3ac7e3869e694592e542a7d58d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
