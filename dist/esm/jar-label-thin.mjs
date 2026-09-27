export const name="jar-label-thin";
export const id="dl_7254f3bb36f8475ba35e";
export const url=new URL("../icons/jar-label-thin.svg?v=3560738dd369b7b88fa7d9bdc2efbd79779d14446dffcb512591774d4274a096",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
