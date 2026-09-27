export const name="lucid_2-door-stairwell";
export const id="dl_757ee530cc324a02a8c6";
export const url=new URL("../icons/lucid_2-door-stairwell.svg?v=e565c5191333efbaeb41a5aff4b977c601db1444e9d88f54ee4351b7290b346b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
