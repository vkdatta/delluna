export const name="cherries-bold";
export const id="dl_ced116e263d6491fa60a";
export const url=new URL("../icons/cherries-bold.svg?v=3cce0070351b9b7ea1effe82f9f3a6270bdba67cd61f610e539d954d6ce965c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
