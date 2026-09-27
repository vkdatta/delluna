export const name="search_gear-fill";
export const id="dl_c6eac61b417f606a8a68";
export const url=new URL("../icons/search_gear-fill.svg?v=691e16ae9da0c3f5189503ef9d22618d8d4ffcae8f1665cc2ea60ea535c75251",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
