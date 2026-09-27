export const name="arrow-arc-left-fill";
export const id="dl_fab12c3366c14692af1d";
export const url=new URL("../icons/arrow-arc-left-fill.svg?v=b8f345ddf49b282f360915bfff0b788f7b5bb1de28ac213b8d3879b35bcc51b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
