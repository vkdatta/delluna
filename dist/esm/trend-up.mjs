export const name="trend-up";
export const id="dl_86c0ee30dfbe47795ae7";
export const url=new URL("../icons/trend-up.svg?v=7799c63cd59ce2d6536bd4388bbf2244f8f076eb791f078f741e8070dbbcb7db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
