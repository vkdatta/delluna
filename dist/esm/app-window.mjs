export const name="app-window";
export const id="dl_92aed84ac14c45f39693";
export const url=new URL("../icons/app-window.svg?v=db88e7c220ef70cf062274ad5ac66d2b983c4fd19c87fdedb34f4c0c049a28ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
