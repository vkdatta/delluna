export const name="sword-bold";
export const id="dl_bf903bf571ffa6544f48";
export const url=new URL("../icons/sword-bold.svg?v=043ef32c36794019d87efab978ecd109ab7b86a75f6b71f5dcf885472eb91ab3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
