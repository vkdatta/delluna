export const name="shades";
export const id="dl_b07dc70c635070cd00fa";
export const url=new URL("../icons/shades.svg?v=160ad74fa36a79781afc48c19214aeb5c0b8f4fdac82eadeddb8e7f7eadcdab4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
