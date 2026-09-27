export const name="bookmark-simple";
export const id="dl_db4d186fa39a466c996e";
export const url=new URL("../icons/bookmark-simple.svg?v=18d98b34307daca3bdd2f7edfeaf95e24dcbb5bbfda4f8ce77a211e93074d485",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
