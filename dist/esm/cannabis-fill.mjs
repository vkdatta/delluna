export const name="cannabis-fill";
export const id="dl_5714f9e4913376da1c2f";
export const url=new URL("../icons/cannabis-fill.svg?v=bd4a9c2530c7cc8e42a862bea24678e7b30bab776a65bc9be1ee6d6f362f150a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
