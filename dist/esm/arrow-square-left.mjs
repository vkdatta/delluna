export const name="arrow-square-left";
export const id="dl_d81592bc7f5c4ed4a918";
export const url=new URL("../icons/arrow-square-left.svg?v=0894b7d48b33d96184f34957a405907db5b35c2c8953d6f38658707d9419685e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
