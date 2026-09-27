export const name="bicycle-fill";
export const id="dl_059e0ac431cd447194f5";
export const url=new URL("../icons/bicycle-fill.svg?v=b1aed7aaa0b3bb8b1aabd1af7b2707d7233cbac7802a385d19ea33e61ba40827",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
