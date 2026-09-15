export const name="block-fill";
export const id="dl_85ca4e4de4584a9a8078";
export const url=new URL("../icons/B/block-fill.svg?v=906359dc5d588a6ecbd24d5cd6836c4ffd846126938614bd0de9168a61e75501",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
