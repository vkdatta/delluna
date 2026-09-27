export const name="breaking_news";
export const id="dl_792a755bbbef798fe2b6";
export const url=new URL("../icons/breaking_news.svg?v=d5bc5d043abb6c0f0a616dcb4e1ed4e6204228fce0e65c9244c9f3873736fc81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
