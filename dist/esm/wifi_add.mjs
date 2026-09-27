export const name="wifi_add";
export const id="dl_204c4f5aee897aff0d9b";
export const url=new URL("../icons/wifi_add.svg?v=33f8381d7f4501f253b79553bd61be4613b5d3bdf0695c3c51c11e38fd8a9b65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
