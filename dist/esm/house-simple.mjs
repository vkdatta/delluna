export const name="house-simple";
export const id="dl_54a99d021aa34518820f";
export const url=new URL("../icons/house-simple.svg?v=93629796e69d0033245e3c31b786cf62147e1e5d327a9d6a18eb1f81022c6f08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
