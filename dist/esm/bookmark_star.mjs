export const name="bookmark_star";
export const id="dl_76a32ccc252cf536af82";
export const url=new URL("../icons/bookmark_star.svg?v=5b76196a5e4a7e41f6b4c1c24b2ed654fcb6bc3b520ee1801a05fce7cea4e7e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
