export const name="exclamation-mark-fill";
export const id="dl_8c03f644652f4ecba32f";
export const url=new URL("../icons/exclamation-mark-fill.svg?v=2907723164be1299096b1bc6e8a1b0cb9ff94983c5e6c5952002c6c9047aeff9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
