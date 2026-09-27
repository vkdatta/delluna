export const name="fast-forward-circle-light";
export const id="dl_0fb6cd41ec564eefad39";
export const url=new URL("../icons/fast-forward-circle-light.svg?v=026ad9077e45612f50004c4298862f0621f33b5054a5697390681605057b9f10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
