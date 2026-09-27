export const name="looks_two-fill";
export const id="dl_fe7fb6a7638a8a6daf21";
export const url=new URL("../icons/looks_two-fill.svg?v=651c954252088ef3b8abdbbd92c3343a79f6c3dd7712086f73c70fa7a91027dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
