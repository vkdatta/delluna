export const name="article-fill";
export const id="dl_a9428d04fbecbc85e8a6";
export const url=new URL("../icons/article-fill.svg?v=bb94d91af6f17abc2b915b965c78efb5142d667903e63cfbc7ea16bc3e255e3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
