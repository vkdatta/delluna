export const name="windmill-bold";
export const id="dl_389078696530a75fbbe4";
export const url=new URL("../icons/windmill-bold.svg?v=1c2b637a09d7cc80036cdcf132f7ba689f41326404d3a8842fde36fd06697828",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
