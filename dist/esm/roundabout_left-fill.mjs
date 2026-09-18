export const name="roundabout_left-fill";
export const id="dl_5f86eaa9a69142c19798";
export const url=new URL("../icons/roundabout_left-fill.svg?v=e19914b34043e470ac98a6fa3473905577395e0ef178944e0b9c30b63668ecca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
