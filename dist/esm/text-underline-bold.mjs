export const name="text-underline-bold";
export const id="dl_ffc512b0fa76ee8b979f";
export const url=new URL("../icons/text-underline-bold.svg?v=8d64e978be6862806f1ec4117b23b824eb3c83b335b44aeac9725a8a1b51b454",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
