export const name="book_6";
export const id="dl_529d70f805db45587323";
export const url=new URL("../icons/book_6.svg?v=75ac8f00d8fcf58c2efaf61b646d7d2785b56c447af409bccfa301df57f20743",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
