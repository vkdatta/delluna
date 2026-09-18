export const name="format_quote";
export const id="dl_0a63b72585694b24bad1";
export const url=new URL("../icons/format_quote.svg?v=163e0712ff7803a024b8f7162f17a5c992bb65ccfbd847b6d9f17d52254ecdde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
