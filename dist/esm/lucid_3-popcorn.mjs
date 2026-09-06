export const name="lucid_3-popcorn";
export const id="dl_44436830a5384b4d9c46";
export const url=new URL("../icons/lucid_3-popcorn.svg?v=05950a651c297171b9e53653519e4f7b8a0857ed3e8662dfb880989a34c9bfbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
