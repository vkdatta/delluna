export const name="house-simple-thin";
export const id="dl_7981f8818d2f45b0aec8";
export const url=new URL("../icons/house-simple-thin.svg?v=d95d2ecde79c9933174643d1349c528207e63cdd84453b808cc86db149d44afb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
