export const name="user-minus-fill";
export const id="dl_9aeca64de4272fba58f1";
export const url=new URL("../icons/user-minus-fill.svg?v=31b42378a2715ef884cd80e05ccc6f6225a68ca211582a83f5715714f5c4fd02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
