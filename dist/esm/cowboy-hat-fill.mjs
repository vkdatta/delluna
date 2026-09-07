export const name="cowboy-hat-fill";
export const id="dl_a3be563289814337a772";
export const url=new URL("../icons/cowboy-hat-fill.svg?v=f6cfcdf233b812b06d9fcf2649da8ad044539ff0e572c92ba2ef8acfe95d3794",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
