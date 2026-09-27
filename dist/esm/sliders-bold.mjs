export const name="sliders-bold";
export const id="dl_cdb2d63b054135fb3bd8";
export const url=new URL("../icons/sliders-bold.svg?v=2597b7870cd9880b7337fb0d1d62855fe730cefc6977acd04e3249bc08f85802",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
