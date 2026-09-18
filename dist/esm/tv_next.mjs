export const name="tv_next";
export const id="dl_0610c78399f14b7cb666";
export const url=new URL("../icons/T/tv_next.svg?v=0991d3aa8d7d11473163bb5f85a5e18eb127725e8da71c2b5f6e2e300c66111d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
