export const name="package_2";
export const id="dl_e742133e61d5c555ce9b";
export const url=new URL("../icons/package_2.svg?v=58718fead9dd1e561fda05fb18b9a24b810d26a6e914cd2629b518f5eada5311",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
