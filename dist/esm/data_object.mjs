export const name="data_object";
export const id="dl_cc542f674ea1e6046303";
export const url=new URL("../icons/data_object.svg?v=ca0bb2981e777f137a2415fa27fb8f743bc4aea0977042507c23cc8ab4857087",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
