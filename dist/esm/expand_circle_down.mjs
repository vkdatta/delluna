export const name="expand_circle_down";
export const id="dl_766e990713cd11af148a";
export const url=new URL("../icons/expand_circle_down.svg?v=c0cbdc697c9550b571ca479acc8998922be15d10cb59e06d1ff98337d6dcd773",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
