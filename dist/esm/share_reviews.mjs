export const name="share_reviews";
export const id="dl_c0fa4d75a458432e1d97";
export const url=new URL("../icons/share_reviews.svg?v=47f7f061dcf8d8453e5afaee2c6661c60ae0e5e358810a965874457e29fb381b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
