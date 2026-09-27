export const name="minus-circle-bold";
export const id="dl_a26f8e6d3f4f43f5b280";
export const url=new URL("../icons/minus-circle-bold.svg?v=56cf7c8b168ee2b82d21e512bf68601df74e4c955a5376930d2036afb79e0631",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
