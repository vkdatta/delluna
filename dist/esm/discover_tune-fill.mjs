export const name="discover_tune-fill";
export const id="dl_990b4e32d340ee9d0291";
export const url=new URL("../icons/discover_tune-fill.svg?v=95c8926d418e5dfc278c02a43d3c0b2a89b4b112a0aa16a46e1ae9e563bca6d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
