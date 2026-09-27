export const name="article_person-fill";
export const id="dl_2b0c6145d09ba5e2a66a";
export const url=new URL("../icons/article_person-fill.svg?v=93ab505c3f0908dbe91640cc020e6c8c174b2e3b76fa16a931d4487f222959f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
