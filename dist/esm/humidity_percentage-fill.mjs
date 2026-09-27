export const name="humidity_percentage-fill";
export const id="dl_72f8109ac1ce1b3d3fdf";
export const url=new URL("../icons/humidity_percentage-fill.svg?v=c67bfe21dd5895ba0b7072b5c121f0401ddf05b750537960aa1f87f1c57b6108",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
