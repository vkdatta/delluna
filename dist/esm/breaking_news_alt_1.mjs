export const name="breaking_news_alt_1";
export const id="dl_5369eb40d5db4e2a8c30";
export const url=new URL("../icons/B/breaking_news_alt_1.svg?v=6e8a0899dc10ac5878e52f4cdc27fdaec43bf7b0b34694795a611c2c5eda80e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
