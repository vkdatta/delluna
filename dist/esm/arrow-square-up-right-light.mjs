export const name="arrow-square-up-right-light";
export const id="dl_7c1d4924be9e4f8ba09f";
export const url=new URL("../icons/arrow-square-up-right-light.svg?v=756b49b429e18f9089ba1d94ab625f9590fa00e25304e7aa9d8c36e1ca2f22e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
