export const name="vinyl-record-fill";
export const id="dl_13a8ce9fed60e3ac8a3a";
export const url=new URL("../icons/vinyl-record-fill.svg?v=7372ca0ada2cd5b8229a1d3ac3c75194c4706aefea0ac0d35fc973a320f5a8a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
