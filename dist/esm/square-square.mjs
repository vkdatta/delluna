export const name="square-square";
export const id="dl_a2bdf76b9c314792b112";
export const url=new URL("../icons/square-square.svg?v=b86390def49bca4fd4cac0ccc625f0d29f126c162d55c07c7ef14224cea2315c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
