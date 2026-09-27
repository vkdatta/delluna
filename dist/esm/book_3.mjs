export const name="book_3";
export const id="dl_b89385498da28aad9f85";
export const url=new URL("../icons/book_3.svg?v=ecf68c0ebd66f4c8095b7f427e725fbdae840a26fed97cff84b1214f2c04c6d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
