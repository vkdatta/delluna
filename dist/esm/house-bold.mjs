export const name="house-bold";
export const id="dl_1f88a550ef424fbaa43a";
export const url=new URL("../icons/house-bold.svg?v=25f4b1504212c7c064054bd1d02ddaaf0a4e16ed49c6b08b23c3dc1f74e1d446",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
