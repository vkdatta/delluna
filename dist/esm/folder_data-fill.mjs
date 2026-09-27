export const name="folder_data-fill";
export const id="dl_a592ccdc186779865b76";
export const url=new URL("../icons/folder_data-fill.svg?v=545094f696e435d2a0256cb8e68eb5cbce2b35a1de76e9b0ae50226d5863dc66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
