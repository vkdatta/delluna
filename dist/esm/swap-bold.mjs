export const name="swap-bold";
export const id="dl_c87e9a3dea31421ebe79";
export const url=new URL("../icons/S/swap-bold.svg?v=2b246a1da0773cfe3921a2362eff0bfd161a756cb0f690364f8fbbbc8a784f89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
