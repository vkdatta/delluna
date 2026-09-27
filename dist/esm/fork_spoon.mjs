export const name="fork_spoon";
export const id="dl_dceb0019f9ce1832f702";
export const url=new URL("../icons/fork_spoon.svg?v=3772dba7748784df7dc62b523e46c899baee4f9b7102f27725bb8ebf563a728b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
