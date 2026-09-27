export const name="shopping-bag-open";
export const id="dl_68e35450a5e7806f5901";
export const url=new URL("../icons/shopping-bag-open.svg?v=2b261e5e9b153e128326c46c938c04c6d71cb362f06203bee8467874248b2241",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
