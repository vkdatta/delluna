export const name="swap_vertical_circle-fill";
export const id="dl_a382423e590f71b543ce";
export const url=new URL("../icons/swap_vertical_circle-fill.svg?v=79a0725fb3f31061910fabeaa5239955b24698d827f56c9d556fe7b963eb6f15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
