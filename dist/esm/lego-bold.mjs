export const name="lego-bold";
export const id="dl_bd2068ce85ff43ab82b8";
export const url=new URL("../icons/lego-bold.svg?v=21a4b3803c67a7f8ed32ecf066b79e349e315fde8c61bfcd27d7b81393d3f3fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
