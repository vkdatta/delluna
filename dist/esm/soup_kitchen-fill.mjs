export const name="soup_kitchen-fill";
export const id="dl_e80e673812e33c2800b2";
export const url=new URL("../icons/soup_kitchen-fill.svg?v=05199133c025120ff652f7cc5882fd3fc6302c3edb8726de16b6d621cdd8ba37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
