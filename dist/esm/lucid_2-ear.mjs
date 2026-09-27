export const name="lucid_2-ear";
export const id="dl_fff9db7e9a8243bb8c55";
export const url=new URL("../icons/lucid_2-ear.svg?v=4188227bc5e80a95747d56b46342da1c77bcd1485e0c91978b1ccf05a6e79795",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
