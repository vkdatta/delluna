export const name="spinner-fill";
export const id="dl_af2c02570753d064bd73";
export const url=new URL("../icons/spinner-fill.svg?v=8a83a1ad519266abcce4ae29ce510b27b6ac74b965b01badf361d7832de00d86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
