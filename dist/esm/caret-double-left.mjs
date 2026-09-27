export const name="caret-double-left";
export const id="dl_aa6841a1df824b1b9554";
export const url=new URL("../icons/caret-double-left.svg?v=e48f6d28147260d59a5149292cbb7f6f21e0c28efc060fd086e3a6b62dfeb6af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
