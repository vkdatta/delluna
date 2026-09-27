export const name="lucid_2-heart-plus";
export const id="dl_4beff44932b045a9ba30";
export const url=new URL("../icons/lucid_2-heart-plus.svg?v=9f3ef7d95c09ce698bdee402b3034106acd0b0bafbe290c802f87935d6fa6121",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
