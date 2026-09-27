export const name="home_mini";
export const id="dl_a9b47255cbbc55145e7d";
export const url=new URL("../icons/home_mini.svg?v=517d71ad7bdd77c4aa00e35957706df8380e75dbd921f2e0344f518a274ed33c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
