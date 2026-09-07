export const name="virus-bold";
export const id="dl_2d6e2d000ff449469eaf";
export const url=new URL("../icons/V/virus-bold.svg?v=ecd936549d0fef232ade8558a5bd9f62e1f55c96e76fa435333309fe55689b08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
