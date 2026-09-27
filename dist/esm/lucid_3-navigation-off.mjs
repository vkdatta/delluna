export const name="lucid_3-navigation-off";
export const id="dl_a324f7d832b04477b225";
export const url=new URL("../icons/lucid_3-navigation-off.svg?v=00a3f9f0de616c529e147ac6f8d4467f8d9cb47d5141b46339839fbe9795a774",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
