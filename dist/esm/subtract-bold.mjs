export const name="subtract-bold";
export const id="dl_29c8b958449bae588970";
export const url=new URL("../icons/subtract-bold.svg?v=0e172281d150692818381cd23f57073c2dfc08653043813bae8be266a6738379",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
