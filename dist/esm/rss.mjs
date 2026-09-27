export const name="rss";
export const id="dl_4b495c683c244b9bafc2";
export const url=new URL("../icons/rss.svg?v=6ea490cb19daca157b6d51a918c36e7a695d165c4c3a942c493660129e20010a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
