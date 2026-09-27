export const name="lucid_3-radiation";
export const id="dl_e9b4c4a0e61348eea44b";
export const url=new URL("../icons/lucid_3-radiation.svg?v=05d346e5bfd0824bede3e1bf9e31d7bd71244d94e85fc4aec68c3f15333ad534",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
