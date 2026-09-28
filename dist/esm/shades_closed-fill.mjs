export const name="shades_closed-fill";
export const id="dl_b7311998cd63b6f074dc";
export const url=new URL("../icons/shades_closed-fill.svg?v=9d00b41d69ea18a5934adfe009d214a1ff8f3ebfb13e0bb8e1d3e9eb4decc29a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
