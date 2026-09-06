export const name="lucid_3-plane-takeoff";
export const id="dl_ed73f1284cf54ba299ff";
export const url=new URL("../icons/lucid_3-plane-takeoff.svg?v=9c7297f5d88801e7a8745c26a6e70359681525b6f1ce46abc8ed7b0113250ab6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
