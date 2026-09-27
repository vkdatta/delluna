export const name="update_disabled-fill";
export const id="dl_569a528305b044e8a864";
export const url=new URL("../icons/update_disabled-fill.svg?v=17fc1cc35083a2c64fea7040fe95fda0131b855920b50ffe47b83295c038eab5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
