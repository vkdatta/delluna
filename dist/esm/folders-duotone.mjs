export const name="folders-duotone";
export const id="dl_339f0835ee954ac1a055";
export const url=new URL("../icons/folders-duotone.svg?v=a98279745145cc08b47da5348b951d68fe094d0ae7615495d3151314c39dd44b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
