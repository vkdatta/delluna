export const name="lucid_1-braces";
export const id="dl_0213e01cad0e43eaa333";
export const url=new URL("../icons/lucid_1-braces.svg?v=12d8d912de0cb1e54170e866737525ec42cbba7f1e907ffd5a554c1e91bf4943",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
