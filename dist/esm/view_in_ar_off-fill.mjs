export const name="view_in_ar_off-fill";
export const id="dl_b9e9a4c549273e096152";
export const url=new URL("../icons/view_in_ar_off-fill.svg?v=b87a21c304200c074caae985092f2213db704024762123ab0d0aed456eaad2d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
