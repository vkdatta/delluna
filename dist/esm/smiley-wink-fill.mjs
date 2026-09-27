export const name="smiley-wink-fill";
export const id="dl_8292a205198e748b86f6";
export const url=new URL("../icons/smiley-wink-fill.svg?v=44b0f5a74290507fd85728478c0d9e02d67cc13c469725c26f38d41e8e87e998",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
