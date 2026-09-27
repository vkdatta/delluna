export const name="megaphone-simple-bold";
export const id="dl_98d3b1a75e2144929346";
export const url=new URL("../icons/megaphone-simple-bold.svg?v=e84d4a355510ea7a5049c1827162939620b1f0d9afe345be911acaea1468b310",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
