export const name="lucid_2-import";
export const id="dl_5053583fcb1d4d959387";
export const url=new URL("../icons/lucid_2-import.svg?v=b108f64bb50473ec5a78aaef74c4d2b693d283c67ee58838ea4e1d7151746d05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
