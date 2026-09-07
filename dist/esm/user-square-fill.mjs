export const name="user-square-fill";
export const id="dl_ef28601f8e42481c84bc";
export const url=new URL("../icons/U/user-square-fill.svg?v=787221e0bc4dc8a3d32e75529bc99c3106304f47da5ebe3c4291b29f9898007b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
