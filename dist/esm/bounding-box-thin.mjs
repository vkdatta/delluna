export const name="bounding-box-thin";
export const id="dl_5ec530a693a54582976d";
export const url=new URL("../icons/bounding-box-thin.svg?v=46a691bf61cab0921dd04fc474d9f2e7b6e41c52e86b504ceedca205fa3601cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
