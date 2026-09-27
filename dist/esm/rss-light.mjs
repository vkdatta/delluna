export const name="rss-light";
export const id="dl_007191425c2a49b0ae6b";
export const url=new URL("../icons/rss-light.svg?v=8695c6b8a05166286b547e050fa28f1e6c95f21ada61a45584a1f6f47d03a386",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
