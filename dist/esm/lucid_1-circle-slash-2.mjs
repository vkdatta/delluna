export const name="lucid_1-circle-slash-2";
export const id="dl_9edf2df2a2b845628538";
export const url=new URL("../icons/lucid_1-circle-slash-2.svg?v=6059663463cf4d3e81cb22f4fd319d53f9539cc5d4d37e142592ae58fc87a9ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
