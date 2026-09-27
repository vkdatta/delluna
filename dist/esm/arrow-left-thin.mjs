export const name="arrow-left-thin";
export const id="dl_b5286af2efee43548611";
export const url=new URL("../icons/arrow-left-thin.svg?v=70a7d0407ae88a566445c386c498aa8cd07f689327ce528870ce8be05e9fda2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
