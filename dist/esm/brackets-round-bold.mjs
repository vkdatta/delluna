export const name="brackets-round-bold";
export const id="dl_e0968f86a1d84786a75f";
export const url=new URL("../icons/brackets-round-bold.svg?v=56924b4aaed518c8de3bc1aabee220f3f6670f4c2908cd3852a7bf1b879fb41f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
