export const name="lucid_3-sofa";
export const id="dl_f769c9383d834587ae7f";
export const url=new URL("../icons/lucid_3-sofa.svg?v=78e06a02398dc50a475aeb8dafdc3290096f8efa2edd7a8dca525ee62de6b369",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
