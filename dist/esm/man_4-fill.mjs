export const name="man_4-fill";
export const id="dl_6e9b534e689118076c1e";
export const url=new URL("../icons/man_4-fill.svg?v=89b89254ae3c1ceca651fb04700631b9e6afaacfbab00b62c1ca12fabe4beab4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
