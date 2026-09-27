export const name="heart_minus";
export const id="dl_2bbc8624165ec3c0debd";
export const url=new URL("../icons/heart_minus.svg?v=4d186ae1bc379cba33d7e69d41b0128c3759eb6c0ae56cba7cdff7eb335bf2bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
