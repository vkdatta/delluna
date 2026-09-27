export const name="lucid_3-ship";
export const id="dl_7fed8ae44a02434aac74";
export const url=new URL("../icons/lucid_3-ship.svg?v=e0c652c0ad46568fb4c1b5fb228d213af2fd53729d6fc187b9cfc20201c7467e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
