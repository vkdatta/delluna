export const name="home_max-fill";
export const id="dl_e24fcadc4f10bc4adce0";
export const url=new URL("../icons/home_max-fill.svg?v=99124a0ae8bc7e784074dc811106d1de0e170e915952ca996c2d2e2450d36d05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
