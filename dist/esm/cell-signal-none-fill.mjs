export const name="cell-signal-none-fill";
export const id="dl_43aed82101cd4c2095f4";
export const url=new URL("../icons/cell-signal-none-fill.svg?v=ecace6a53e6c85f2f9fddd4a4e08f9af4cc1fca8872ef152fd172f4d1cb88323",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
