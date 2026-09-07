export const name="trademark-duotone";
export const id="dl_1b4d253632684b4581bb";
export const url=new URL("../icons/T/trademark-duotone.svg?v=1fcfbd24995ac1a497002e71b9b309237028f749a7e821b97da029ccdd866d27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
