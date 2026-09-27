export const name="print_connect-fill";
export const id="dl_6d3e57c6f710ea66f03e";
export const url=new URL("../icons/print_connect-fill.svg?v=4c3e540beb134f6539e45df0d1b8200ac83388e0dfbb3a76f9e58776b62d06e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
