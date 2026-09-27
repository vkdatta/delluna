export const name="arrow-square-right-duotone";
export const id="dl_71ffcacd98ff442d9738";
export const url=new URL("../icons/arrow-square-right-duotone.svg?v=6c1b3b940a848acadee4f33654d63cea6a82bd3ec4ff9a906e7161443addff85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
