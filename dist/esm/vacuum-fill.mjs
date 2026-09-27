export const name="vacuum-fill";
export const id="dl_becb7bccbbe169d54321";
export const url=new URL("../icons/vacuum-fill.svg?v=ff51e40e5e66f511fb23c4e064422b3cc7254e897d35b9effb095b61c5b9fa1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
