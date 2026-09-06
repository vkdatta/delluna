export const name="browsers-fill";
export const id="dl_8b7a028fb7bf4289b701";
export const url=new URL("../icons/browsers-fill.svg?v=968f627bd6696759d27ff9c28b601bf31b2fffd5b595a9305e8eb41edd7e88ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
