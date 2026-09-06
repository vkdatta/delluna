export const name="lucid_3-navigation-2-off";
export const id="dl_dabea2a0c8a4405e829f";
export const url=new URL("../icons/lucid_3-navigation-2-off.svg?v=13c64e810e92db13bfadabfb6d9b18535c054cdcc02af0fc599f260641e02632",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
