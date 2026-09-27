export const name="article";
export const id="dl_6057911e0dbf451a88d8";
export const url=new URL("../icons/article.svg?v=016eb41d93c272d5de7bf0627b7e704d8a0c34938483f00980737a1661fa1230",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
