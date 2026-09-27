export const name="rss-thin";
export const id="dl_81ca9b931b144e9c9faf";
export const url=new URL("../icons/rss-thin.svg?v=47fb8cd3dbf7294bfd370a916ad1437345f1794c3284706c8339952b781d6794",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
