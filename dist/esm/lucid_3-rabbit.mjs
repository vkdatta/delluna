export const name="lucid_3-rabbit";
export const id="dl_4483d0b073cf4174bf78";
export const url=new URL("../icons/lucid_3-rabbit.svg?v=5b32e15178d89850bd80266a2ae42b6e05c48cc60eb1ea8bdd26b9a09ada0602",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
