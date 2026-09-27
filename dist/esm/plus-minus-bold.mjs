export const name="plus-minus-bold";
export const id="dl_034fc2afa0eb49448413";
export const url=new URL("../icons/plus-minus-bold.svg?v=e71c20da21b645073e8ee398ecf6b2f45588a5f1e81cdd8d0ffe1700b9a2a5ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
