export const name="lucid_3-repeat";
export const id="dl_f225569790574796a701";
export const url=new URL("../icons/lucid_3-repeat.svg?v=4252786bcf3dbe5106b42a080f46d4aa18119bdb5381b6458834456cba39940f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
