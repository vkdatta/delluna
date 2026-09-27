export const name="lucid_2-folder-key";
export const id="dl_6f11559c32ec42769e36";
export const url=new URL("../icons/lucid_2-folder-key.svg?v=9f3b0fe6ad2019ba532d968a070b343289b91405b7a144d48edcdb47dcd0be9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
