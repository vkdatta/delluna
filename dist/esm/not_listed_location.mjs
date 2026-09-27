export const name="not_listed_location";
export const id="dl_fa35fe21414203f295fd";
export const url=new URL("../icons/not_listed_location.svg?v=f7271ea74705aee13ee574edfedaf9c57593ca54f9fa16d1343ccd4890bda4a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
