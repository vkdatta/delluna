export const name="sentiment_stressed";
export const id="dl_29aee3603b080f60a37e";
export const url=new URL("../icons/sentiment_stressed.svg?v=4654a4e135a1744761f5f5757a89376854d6b8812efed5924ac2208ca67d7b94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
