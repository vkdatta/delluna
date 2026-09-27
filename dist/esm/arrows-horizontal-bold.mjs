export const name="arrows-horizontal-bold";
export const id="dl_40c12dadfcbb41bd8477";
export const url=new URL("../icons/arrows-horizontal-bold.svg?v=e59104342a20a3641d62466c1a0cd6fa0a9fe6dc0d6576d3b81f3105f285d16e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
