export const name="battery-vertical-full-light";
export const id="dl_19367b01ff2b49d984d0";
export const url=new URL("../icons/battery-vertical-full-light.svg?v=9821e370c8210bdc3bb2d997640eb94a5d394227c74321cc4ab7ab8b83a83ca6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
