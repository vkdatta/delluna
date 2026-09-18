export const name="wifi_home-fill";
export const id="dl_00a64fd62a36409692a8";
export const url=new URL("../icons/wifi_home-fill.svg?v=845615e9594601c32cad03f86ed262d6d96089882c567ac6d31c6510ac7f7e40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
