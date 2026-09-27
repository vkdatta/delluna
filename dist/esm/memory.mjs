export const name="memory";
export const id="dl_670a435ef5156885b0a9";
export const url=new URL("../icons/memory.svg?v=cb01545cf31dbafe84bf0bdc0c153a26db4ecea417326d23b284e62883e05938",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
