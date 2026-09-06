export const name="caret-double-left";
export const id="dl_aa6841a1df824b1b9554";
export const url=new URL("../icons/caret-double-left.svg?v=24e3543fdc30c0637f626035164902aca0eb886e0300cedcc1902385debeedf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
