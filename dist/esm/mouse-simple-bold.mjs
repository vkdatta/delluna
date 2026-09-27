export const name="mouse-simple-bold";
export const id="dl_9371cee3bafe4ce1be67";
export const url=new URL("../icons/mouse-simple-bold.svg?v=fc6a921a265ac3714df4f305d1bc2a6107a0fe063c2f7ae1c86b8b6631434119",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
