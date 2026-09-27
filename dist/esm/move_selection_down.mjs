export const name="move_selection_down";
export const id="dl_440dd92eae689fdc3f59";
export const url=new URL("../icons/move_selection_down.svg?v=1ee423166ad62638d6bdf754cfc369c41b29932ad8c1a61c1c1ae59df3168e3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
