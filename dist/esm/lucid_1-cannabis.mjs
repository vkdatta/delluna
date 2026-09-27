export const name="lucid_1-cannabis";
export const id="dl_e6e5aabf860144c3806c";
export const url=new URL("../icons/lucid_1-cannabis.svg?v=2948c52ddbdeb6c995d1a94b6da80d6b2a1e4f92feb82c20572e441a4352abea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
