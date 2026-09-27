export const name="unfold_less";
export const id="dl_b3be09e87d17d9f3efff";
export const url=new URL("../icons/unfold_less.svg?v=24ce593f28b4a636f4084951e73bfd3843f2d1417f55e9bae9c32c34d5bacd11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
