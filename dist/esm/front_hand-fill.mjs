export const name="front_hand-fill";
export const id="dl_62de827f8f5e4881aae7";
export const url=new URL("../icons/F/front_hand-fill.svg?v=f61df84ce0a50ec7acff7684b7771f38309e381bafb9c9f502d0c96cdf2a393f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
