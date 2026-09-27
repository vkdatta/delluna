export const name="lucid_2-list-music";
export const id="dl_aec2c3ac5fd64c5bbb3b";
export const url=new URL("../icons/lucid_2-list-music.svg?v=991188ca5edbae9cb6a0a2b3e21ea4b8543de72ffc2a26668d95a3829a953f47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
