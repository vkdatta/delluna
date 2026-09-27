export const name="trending-down";
export const id="dl_05a3fe073cd847e19cf9";
export const url=new URL("../icons/trending-down.svg?v=8e2ae67aa8f5c10b38d600df848824aae626bd6a0bd13a1c2d069d6eb157b331",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
