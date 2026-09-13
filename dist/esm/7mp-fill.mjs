export const name="7mp-fill";
export const id="dl_afb1ed1eb9f74c869dfe";
export const url=new URL("../icons/7/7mp-fill.svg?v=8d535059d7dd325f4fbd136b8664a655567fbdb145a18a9724880b094a75a158",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
