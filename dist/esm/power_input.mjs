export const name="power_input";
export const id="dl_8b871aa407ff57d3b6ad";
export const url=new URL("../icons/power_input.svg?v=433a002dfb8fa8f09eab32b4aa5af5dd51969c223719667e7f08be91d5bbd243",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
