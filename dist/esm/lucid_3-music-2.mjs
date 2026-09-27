export const name="lucid_3-music-2";
export const id="dl_a38e9ef8d772475b8014";
export const url=new URL("../icons/lucid_3-music-2.svg?v=89b3c3d28942a5354e47cc937e6ec43ab1612dc4461f99ab0b60e452e722ee03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
