export const name="lucid_1-arrow-big-right";
export const id="dl_e0679ac153864315928c";
export const url=new URL("../icons/lucid_1-arrow-big-right.svg?v=9803680c433f3580d45783337d10427b92898109336004fe58ee4603ae356f6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
