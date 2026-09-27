export const name="rss-bold";
export const id="dl_5cd6c12c16fa47c1bd55";
export const url=new URL("../icons/rss-bold.svg?v=649b39daa4e695b351d37d7906074b79ef97a68e1e2815305eee388b9266235d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
