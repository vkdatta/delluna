export const name="breaking_news-fill";
export const id="dl_2f7f551031d4c54eed8f";
export const url=new URL("../icons/breaking_news-fill.svg?v=89ac617092ae9aa6afe68312b7729f24abf5fa9e8fb654bd24705be1d49d3f99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
