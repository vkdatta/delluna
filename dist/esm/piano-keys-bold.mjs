export const name="piano-keys-bold";
export const id="dl_8d6c6e83d89e42d58182";
export const url=new URL("../icons/piano-keys-bold.svg?v=92a032985a922f576f5405cd52005249f08060ded789e75437a12d123a6a9447",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
