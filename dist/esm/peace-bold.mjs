export const name="peace-bold";
export const id="dl_c3eb2cd3a8444efe90a0";
export const url=new URL("../icons/peace-bold.svg?v=fcaa12c04a51c5fbb027a960f3a80a8154700ad8e18daeb07c3e363dff64d163",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
