export const name="toilet-fill";
export const id="dl_93a9e57900278113a4c7";
export const url=new URL("../icons/toilet-fill.svg?v=5eead7969c69fe72d7514b0a34d908fb6c2f67d046debb55b00b380c88f41732",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
