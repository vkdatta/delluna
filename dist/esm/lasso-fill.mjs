export const name="lasso-fill";
export const id="dl_8750d1f50b774b5a93af";
export const url=new URL("../icons/lasso-fill.svg?v=5582c164be6c81e06995526d26ec0fa2c929fce739c6d77d2222a7da360caf33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
