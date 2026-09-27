export const name="user-sound-fill";
export const id="dl_b983a212ecfec17d7278";
export const url=new URL("../icons/user-sound-fill.svg?v=15502c0080dc7950cefe0345ed7ca143c36c9cde33632c82d27f9dcd74303cab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
