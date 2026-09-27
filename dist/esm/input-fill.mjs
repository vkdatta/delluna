export const name="input-fill";
export const id="dl_c3c4a72197cb2c2d4d8d";
export const url=new URL("../icons/input-fill.svg?v=de6b73dbdbdae11a888dde3e01b0431b1f1f417b10b66d06c1a90e5d89f2da8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
