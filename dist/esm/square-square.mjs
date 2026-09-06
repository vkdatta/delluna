export const name="square-square";
export const id="dl_a2bdf76b9c314792b112";
export const url=new URL("../icons/square-square.svg?v=27c2240c26c7db70c03a9bb504ceae7aae59386e535107a9de7700cb92769e41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
