export const name="columns-plus-left-light";
export const id="dl_c6f45d77baa641d0a674";
export const url=new URL("../icons/columns-plus-left-light.svg?v=8c2aa5119e263ba8acd0254897f992a0180b62fba7a6b1b6b23eda62b26241d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
