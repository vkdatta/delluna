export const name="lucid_3-picture-in-picture-2";
export const id="dl_c42f177b32e24ba889c7";
export const url=new URL("../icons/lucid_3-picture-in-picture-2.svg?v=0c60d523d0182a4576cc9cd8c0b5ad8b206dede5583d618452eb071c38d5823c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
