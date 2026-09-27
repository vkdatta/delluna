export const name="wifi_home-fill";
export const id="dl_9a896ee391f55f51764e";
export const url=new URL("../icons/wifi_home-fill.svg?v=9db249de0420cb9a001580384274598653fd491fe0ade646c7b6c949b7045716",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
