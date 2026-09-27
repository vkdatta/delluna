export const name="lucid_2-file-up";
export const id="dl_61838c4325054e4a88bc";
export const url=new URL("../icons/lucid_2-file-up.svg?v=f1ce4778d85d8179fdbbbc576a7a22fcb0063dd3b13a6aee8b0b49e006591e05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
