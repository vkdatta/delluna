export const name="cell-signal-full-duotone";
export const id="dl_3aef8aa5101745828bbc";
export const url=new URL("../icons/cell-signal-full-duotone.svg?v=44d267416b3e963481ef83f23c2953659ee4813b84eb09832a972fb3ae8e5fc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
