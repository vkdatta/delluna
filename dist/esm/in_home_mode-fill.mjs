export const name="in_home_mode-fill";
export const id="dl_f6e5cc508edbd819b308";
export const url=new URL("../icons/in_home_mode-fill.svg?v=f31242012be768b3dafd187e9714e1be20612c8e2296b8e48dcaa91ddd594e37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
