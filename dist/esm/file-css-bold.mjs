export const name="file-css-bold";
export const id="dl_34566d2d49234c4aa954";
export const url=new URL("../icons/file-css-bold.svg?v=6795296b5b1f169fa1f589baf2aef3e7c026224d4954265eeeec4f403cbbb88b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
