export const name="thumbs-down-bold";
export const id="dl_beab60b32905b5e82263";
export const url=new URL("../icons/thumbs-down-bold.svg?v=ab3392990ce5953a359aa6279334a79af91b1974998fabe84d70f355845aea97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
