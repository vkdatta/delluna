export const name="rss-thin";
export const id="dl_81ca9b931b144e9c9faf";
export const url=new URL("../icons/rss-thin.svg?v=2a9d73ac7008b144b83cdbe4b9b32619c8e38c38893804fa0689c6c0832db17f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
