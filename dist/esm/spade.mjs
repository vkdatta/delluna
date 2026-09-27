export const name="spade";
export const id="dl_60e15dc7459cbfc4b056";
export const url=new URL("../icons/spade.svg?v=92898484ab9550cbcd94a96089da6e3cd7ad872c04524b42c6b68473e713de98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
