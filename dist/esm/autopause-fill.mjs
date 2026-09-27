export const name="autopause-fill";
export const id="dl_6c0a03909dfbab460a2a";
export const url=new URL("../icons/autopause-fill.svg?v=b73b3b9b34be590cff48e9abe4a1f2422cc317fd1b5458db6fe02bfc8eba69df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
