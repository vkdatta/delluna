export const name="add_row_above-fill";
export const id="dl_d048aa70147b42cf923e";
export const url=new URL("../icons/add_row_above-fill.svg?v=fd4536d988884037a3043dc1dfa83ec1261614e4f05ba8f6599a89ef1de589a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
