export const name="flower-bold";
export const id="dl_8456c9e83c934cdd9361";
export const url=new URL("../icons/flower-bold.svg?v=5f1d24dd7cbd2bcf6dfe2f042640f99c199ece9a2513ece3f0c01dbd2a558472",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
