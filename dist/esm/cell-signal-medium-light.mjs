export const name="cell-signal-medium-light";
export const id="dl_1b0c878dd00649c5b603";
export const url=new URL("../icons/cell-signal-medium-light.svg?v=2196a2f137d94e7ad3249073cf85b3726a5045711daeb59f075cfdab7e833c36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
