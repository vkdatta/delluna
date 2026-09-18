export const name="recenter-fill";
export const id="dl_e9f77f157c7f41b2af4c";
export const url=new URL("../icons/recenter-fill.svg?v=1bb799b2225f51826d4cc5ad0ba5ceb44ffe68180054d66c7bfca324bba18bc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
