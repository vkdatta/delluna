export const name="add_a_photo";
export const id="dl_efb25e23b6fa4b61b623";
export const url=new URL("../icons/A/add_a_photo.svg?v=1da97c6a28cedc7f67a2144edcdf81f629eafe7eadc289fea81581b9dd297a46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
