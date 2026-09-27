export const name="bottom_navigation-fill";
export const id="dl_21e7d0eedbef96b982e8";
export const url=new URL("../icons/bottom_navigation-fill.svg?v=6dc2937884cdfd2ffa97acb1998ad9d9ceb320243b3723d07d06703ab969a2cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
