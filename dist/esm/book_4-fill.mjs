export const name="book_4-fill";
export const id="dl_081b653d8877642e0f60";
export const url=new URL("../icons/book_4-fill.svg?v=f705d160f1a78a492ff3767b431d9f34c82e5b41dbdf5d95d1190971c55f5dd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
