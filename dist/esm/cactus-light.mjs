export const name="cactus-light";
export const id="dl_7985060568be4c44abf9";
export const url=new URL("../icons/cactus-light.svg?v=47fea31aac81cfb351d4504d9a2f3bdc7de1aacc1eb9d3a6116f7bcb9d4be7f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
