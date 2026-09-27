export const name="selection-plus";
export const id="dl_2828e4ebffc62c8c3502";
export const url=new URL("../icons/selection-plus.svg?v=8172d1345055e382e81dad46272347f9c2d5d20d316b9da936a42cac5d60565d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
