export const name="diversity_1-fill";
export const id="dl_32d6b8a56a754a36a1b5";
export const url=new URL("../icons/diversity_1-fill.svg?v=b0ff9a2c734de8ecbb5fa5ee30e4eba5949c816be1bdce1b5849237eb278a926",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
