export const name="edit_location";
export const id="dl_750a782af7d44a40a9fc";
export const url=new URL("../icons/E/edit_location.svg?v=977caefb140751d2d66e2c757b0040628c66518ff1d6ecb6eaab2c4031542b87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
