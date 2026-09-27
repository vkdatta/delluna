export const name="stack_star";
export const id="dl_90cfc8cf5f604491d864";
export const url=new URL("../icons/stack_star.svg?v=381be825d3934881e1d107591d734abab167989737afdee9257e28bb344ddc66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
