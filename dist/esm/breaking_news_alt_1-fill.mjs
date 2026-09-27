export const name="breaking_news_alt_1-fill";
export const id="dl_6cc6e0a3a947017ac8fa";
export const url=new URL("../icons/breaking_news_alt_1-fill.svg?v=b72fbca910ff75620b73f662c874314cd802e106c88375aa6708366203d80ec0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
