export const name="breaking_news";
export const id="dl_e786face76954059b49a";
export const url=new URL("../icons/breaking_news.svg?v=d5bc5d043abb6c0f0a616dcb4e1ed4e6204228fce0e65c9244c9f3873736fc81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
