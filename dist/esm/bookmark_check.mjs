export const name="bookmark_check";
export const id="dl_ade5b2c4fbb5abcfcf2d";
export const url=new URL("../icons/bookmark_check.svg?v=b2fff26030ac1f3447c3e3a1613281b6f41d773b2c5b1426ad716989d6735d9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
