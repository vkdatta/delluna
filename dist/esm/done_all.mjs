export const name="done_all";
export const id="dl_da273cfb8a751ef2e57e";
export const url=new URL("../icons/done_all.svg?v=2592fcbeb71b23e6d9f9631e18b8529f9c61e66a4ae6c4c6bfb8bdf0e4a82623",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
