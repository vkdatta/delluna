export const name="grocery";
export const id="dl_1fb11860b3c3b5105c23";
export const url=new URL("../icons/grocery.svg?v=e0adacedab8bef60fc9a7c515eaf10b87fe932ebfb19999b6f167d0732d5966c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
