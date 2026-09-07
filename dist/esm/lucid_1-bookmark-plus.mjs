export const name="lucid_1-bookmark-plus";
export const id="dl_6d7d6222bdc74689be13";
export const url=new URL("../icons/lucid_1-bookmark-plus.svg?v=397adeace8d220206b38b5e2f710a39630ca1ee943978965aedd6436e0b59be7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
