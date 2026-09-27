export const name="lucid_3-square-arrow-left";
export const id="dl_c4bc146b6e2747bfaa7f";
export const url=new URL("../icons/lucid_3-square-arrow-left.svg?v=b90e08a6d3b2422a7c6f7493c4ff2cfe33534b1709649321750de3948aa031e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
