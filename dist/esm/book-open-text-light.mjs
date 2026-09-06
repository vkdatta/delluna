export const name="book-open-text-light";
export const id="dl_97c49c0d1ad140d080c6";
export const url=new URL("../icons/book-open-text-light.svg?v=68fcb30ce59e38bdd6e4872e72d779408a75c9037b995afe4f514e6e6fd9b510",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
