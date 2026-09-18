export const name="closed_caption_add";
export const id="dl_e722a0b001d943138dc6";
export const url=new URL("../icons/closed_caption_add.svg?v=188302d20db084556863a7719b10b7ee1efb6dd2f83f523d0f904bb841a4146d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
