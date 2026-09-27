export const name="rss-duotone";
export const id="dl_429a8a8ef95c4678ab91";
export const url=new URL("../icons/rss-duotone.svg?v=1b05a8738f169a7bafb428f28da59546cf135ee209944d69d929cc0eec8b0ca3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
