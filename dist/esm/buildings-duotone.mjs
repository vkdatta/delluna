export const name="buildings-duotone";
export const id="dl_1c5bba615ba3412b9f6a";
export const url=new URL("../icons/buildings-duotone.svg?v=d6843f7a68d132f539effacbfc5151d6a506ee983f1a409ad98a868d8be14713",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
