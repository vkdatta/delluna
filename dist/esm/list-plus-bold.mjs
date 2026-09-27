export const name="list-plus-bold";
export const id="dl_f23e3ddb4a2d4d1c81f4";
export const url=new URL("../icons/list-plus-bold.svg?v=10864c128186ba02b5be07ee81876921c7a63a25d2d681bdb15f4f752c1b5c65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
