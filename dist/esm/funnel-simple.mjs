export const name="funnel-simple";
export const id="dl_82e1f8e135524df382fc";
export const url=new URL("../icons/funnel-simple.svg?v=f0e085e0cf207a92f6c03cba242ccbbdf0c90b02378c2bb0221b3c6d3627d39b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
