export const name="diamonds-four-bold";
export const id="dl_254c804de800451a94df";
export const url=new URL("../icons/diamonds-four-bold.svg?v=7e7d2b1cb5bb7b38312f8c8d8e7cbb5278408ca204972f3fa19d7f1579a81e0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
