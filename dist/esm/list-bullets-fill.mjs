export const name="list-bullets-fill";
export const id="dl_4a1a69278169409a8da3";
export const url=new URL("../icons/list-bullets-fill.svg?v=1608230094caac56f3596ac3c4a8aeed88aca023b66b722b925765a30ec52f4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
