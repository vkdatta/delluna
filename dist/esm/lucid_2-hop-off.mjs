export const name="lucid_2-hop-off";
export const id="dl_e1fdd9e32b5e41fa97c3";
export const url=new URL("../icons/lucid_2-hop-off.svg?v=b3bdf19ce7e286e32d36795126a3d7bd77b269d5cda6839028fe30603d7b632b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
