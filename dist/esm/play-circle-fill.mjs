export const name="play-circle-fill";
export const id="dl_c3a06485245f4cbb9aee";
export const url=new URL("../icons/play-circle-fill.svg?v=0bc5d103608add5d093d9d54c905eca53e1d28d62c0c1e44b30ef6d5bcc3645c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
