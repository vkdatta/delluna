export const name="article-fill";
export const id="dl_08f40f10b15702423fee";
export const url=new URL("../icons/article-fill.svg?v=b4f71bb012d4a481f217324d49e6c17505ee36bf43e89e6e89006c06a713d91f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
