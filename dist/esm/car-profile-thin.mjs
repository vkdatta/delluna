export const name="car-profile-thin";
export const id="dl_295f9a0da1384fba8c1e";
export const url=new URL("../icons/car-profile-thin.svg?v=0c7b74dd122ea65d667d67db198bbdfe4f00a1090f43f2440af3f8a184cd4101",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
