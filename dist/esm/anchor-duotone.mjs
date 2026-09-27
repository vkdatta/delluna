export const name="anchor-duotone";
export const id="dl_b872265cea524382888c";
export const url=new URL("../icons/anchor-duotone.svg?v=b6b552639402803940a0b03f7e5ceb7dc62fbd6c337d253c338680038b3a11d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
