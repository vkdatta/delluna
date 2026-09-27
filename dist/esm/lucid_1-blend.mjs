export const name="lucid_1-blend";
export const id="dl_dd41c9fc6f6f4ccc8148";
export const url=new URL("../icons/lucid_1-blend.svg?v=ca404ec650d8c74795c3a0d0867617fee1df429e464ee7f225da0d4fdfcb2597",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
