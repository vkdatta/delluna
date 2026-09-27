export const name="traffic_jam-fill";
export const id="dl_72474f570d2ed8ed33ee";
export const url=new URL("../icons/traffic_jam-fill.svg?v=9df56a1cb74d09fbbac41fa07c722339ba91ded019724ba6ddf7845d899b6d07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
