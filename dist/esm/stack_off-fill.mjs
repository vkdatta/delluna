export const name="stack_off-fill";
export const id="dl_47dd0584592d2abca038";
export const url=new URL("../icons/stack_off-fill.svg?v=6ddcdbd79a8129669f6ebff7233d080f703afce6ad694855cec0ac23ea0ade28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
