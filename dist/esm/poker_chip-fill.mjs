export const name="poker_chip-fill";
export const id="dl_c3d307025ddc5dc3171b";
export const url=new URL("../icons/poker_chip-fill.svg?v=29d6eaa43b2cc7a1d9bd621072a38f08d2466ec29a2190fcbf5a248442151ce6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
