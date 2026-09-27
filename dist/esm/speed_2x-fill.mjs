export const name="speed_2x-fill";
export const id="dl_5b1932870aa883b55c24";
export const url=new URL("../icons/speed_2x-fill.svg?v=490f7bf9c503213cb9ed607db6887738d11ace2c92a83547b8f54cddef17844f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
