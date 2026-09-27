export const name="mode_heat_cool";
export const id="dl_e59d355aa65377beb388";
export const url=new URL("../icons/mode_heat_cool.svg?v=4ccecc06dbcfd88706afab1575de7c4af81176138f63c6796d55cedfce90aba0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
