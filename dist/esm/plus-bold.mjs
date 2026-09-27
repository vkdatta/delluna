export const name="plus-bold";
export const id="dl_34f9a468de78427ea682";
export const url=new URL("../icons/plus-bold.svg?v=797611435123945ac86f91856ba31873c0e276a3dbf3317c3963367740c42a28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
