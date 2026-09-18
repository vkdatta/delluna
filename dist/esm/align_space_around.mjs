export const name="align_space_around";
export const id="dl_0860990d35ed4de7b6b6";
export const url=new URL("../icons/align_space_around.svg?v=0fb075654f46d9d23aa6c56b84b06ec152db1720b73c2565bbae354e8990a237",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
