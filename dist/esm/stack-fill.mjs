export const name="stack-fill";
export const id="dl_977fdf2ed2032b69b3bc";
export const url=new URL("../icons/stack-fill.svg?v=8641eb2b5a02dde9ef42b0b0d76dcb5e360609855b6ae097b1107619c9ba0554",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
