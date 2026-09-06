export const name="bug-fill";
export const id="dl_330797ef80ad4c6dbbae";
export const url=new URL("../icons/bug-fill.svg?v=91e955a8df4bdf30dc335e12efba12db482bf112a0609c3918c10872d3c1994b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
