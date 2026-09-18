export const name="dock_to_left";
export const id="dl_d22867df2c20469c9ff2";
export const url=new URL("../icons/dock_to_left.svg?v=48770a85aaceb6795c16941be18ab6e4199dd9124d1b2b47222d3f7302549871",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
