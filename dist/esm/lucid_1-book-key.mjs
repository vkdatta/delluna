export const name="lucid_1-book-key";
export const id="dl_30bde8b47f814afca5d7";
export const url=new URL("../icons/lucid_1-book-key.svg?v=c3d6bfca4f15a60de84fa6439f987f95268f8b4015590f21abd483d64f329d6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
