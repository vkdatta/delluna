export const name="lucid_2-folder-input";
export const id="dl_c7ef82ba5f5447488779";
export const url=new URL("../icons/lucid_2-folder-input.svg?v=a94223153960920ea76f0c2a420105d64f84e64c568a9c22a363e6615b9a48b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
