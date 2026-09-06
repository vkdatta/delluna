export const name="rss-simple";
export const id="dl_2637bf86a9084fa095b5";
export const url=new URL("../icons/rss-simple.svg?v=df3fb06f1c8ab0da0d0902051c1a5e4999c6c9c133a571ab5d95823dd1026958",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
