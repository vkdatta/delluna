export const name="magnification_small";
export const id="dl_26ff5a1d6dcd075ef586";
export const url=new URL("../icons/magnification_small.svg?v=83d0e663d1daa328deb96927a8099a9c4c9fd0e51dfb17a7b4cacb1e625ae61c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
