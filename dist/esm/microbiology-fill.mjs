export const name="microbiology-fill";
export const id="dl_09912f1226c7c6b7073a";
export const url=new URL("../icons/microbiology-fill.svg?v=81ae3d805ecf8241f8cefb647f8a6e5122642db41dacf2fc1cd40f26be5625b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
