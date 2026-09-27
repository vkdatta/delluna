export const name="trend-down-bold";
export const id="dl_cbf2702bcdf9f1fbba5b";
export const url=new URL("../icons/trend-down-bold.svg?v=853b0a6015fe757cb69bc54418d571121452589e66b4004ceacbbd2d5648fd9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
