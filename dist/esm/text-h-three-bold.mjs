export const name="text-h-three-bold";
export const id="dl_aa0a088ab84b0c1cb83b";
export const url=new URL("../icons/text-h-three-bold.svg?v=6fffb0375b57920ca45d2888615b4024f256a2c8098c53b6543226499c7777f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
