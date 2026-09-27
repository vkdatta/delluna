export const name="travel-fill";
export const id="dl_4b184a667a176da8cfba";
export const url=new URL("../icons/travel-fill.svg?v=f9e6e18e2ce3358cd82c52e09fe55419afe3ed5340a2901b19645beb7c3be0fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
