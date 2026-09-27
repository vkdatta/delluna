export const name="inbox_text_share-fill";
export const id="dl_38addfd48dea52318fc3";
export const url=new URL("../icons/inbox_text_share-fill.svg?v=536a6c145b199ebae1418217fe0a2b1bcd50162b2f36ff05e5a00518dcbb9f1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
