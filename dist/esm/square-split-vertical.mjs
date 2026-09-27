export const name="square-split-vertical";
export const id="dl_21f1677d3971489c98b3";
export const url=new URL("../icons/square-split-vertical.svg?v=73c4aba419bf2afd8fd04f7ed04df18f57b744bd6b44b847f0640fd9767623d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
