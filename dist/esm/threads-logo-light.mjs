export const name="threads-logo-light";
export const id="dl_f2c4c28e902e831410e5";
export const url=new URL("../icons/threads-logo-light.svg?v=18fec5645cb21baa535f060addeb94e77f81484408426c4f15e5415b0a89e1ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
