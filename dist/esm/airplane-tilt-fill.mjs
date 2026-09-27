export const name="airplane-tilt-fill";
export const id="dl_b331ae7a35504804b89a";
export const url=new URL("../icons/airplane-tilt-fill.svg?v=3cdd79555445aba0cd211349aa372bb522bfaa256ec36ecf079a9d063f1c4c99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
