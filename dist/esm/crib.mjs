export const name="crib";
export const id="dl_b8873732f6c409ad8062";
export const url=new URL("../icons/crib.svg?v=abb0aeaecb2c40a40d6756db914ee8f7ca5cc34dabdda0f8f57ff917da7b57a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
