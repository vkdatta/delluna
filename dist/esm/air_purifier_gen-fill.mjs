export const name="air_purifier_gen-fill";
export const id="dl_c4032df56495d1f1c632";
export const url=new URL("../icons/air_purifier_gen-fill.svg?v=73193bd4db155fff7397111d5887ebb061f2fc26c7cc019c15e4d442291e33b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
