export const name="move_selection_left";
export const id="dl_701188efb8b9c7b6442f";
export const url=new URL("../icons/move_selection_left.svg?v=ba8bb4a90110b671bbe69f0e1e386b3b25a5719dac41c95cc31b721e67872750",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
