export const name="selection-plus-light";
export const id="dl_9d90e451831f1be8dc92";
export const url=new URL("../icons/selection-plus-light.svg?v=2d57922a3fabe76e392bd22e9a63b1756c10199bb6af5596c45d9691cb879eae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
