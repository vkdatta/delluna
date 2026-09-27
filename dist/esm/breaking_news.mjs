export const name="breaking_news";
export const id="dl_7df5a95405003285bc45";
export const url=new URL("../icons/breaking_news.svg?v=b4ade97eb98db087befe56b14c2390aafb1bf93cd1684590ec365e14125077f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
