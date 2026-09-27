export const name="tab_unselected-fill";
export const id="dl_c8b23931ada98f1f45f7";
export const url=new URL("../icons/tab_unselected-fill.svg?v=40bc6f94c1641644091f694514c4b2a3744a9bdba32744877887c70832fcf6f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
