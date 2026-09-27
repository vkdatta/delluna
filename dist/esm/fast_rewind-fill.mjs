export const name="fast_rewind-fill";
export const id="dl_fd1ea93c1b1b6d8e966c";
export const url=new URL("../icons/fast_rewind-fill.svg?v=765dacfece8c33e6b683299d596dcd6c69e06bf29bd72d3b3e88d36364d1d2f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
