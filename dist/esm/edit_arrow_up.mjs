export const name="edit_arrow_up";
export const id="dl_8c77e6498c9304614fb5";
export const url=new URL("../icons/edit_arrow_up.svg?v=41351ff293431c289493ace42e4a13eb893b623bb909fb6e14d5e75ec1025f9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
