export const name="headphones-duotone";
export const id="dl_ab8927e2f18c40da9e03";
export const url=new URL("../icons/headphones-duotone.svg?v=6a263160f2ff8d8cbfb8531fca758688798c69bbb8e8bfdc08dccee0531e5921",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
