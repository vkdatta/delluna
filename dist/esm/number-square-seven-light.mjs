export const name="number-square-seven-light";
export const id="dl_d70f281bfffd46809c3f";
export const url=new URL("../icons/number-square-seven-light.svg?v=ca740a353c31335dc1ac6adf266e18e14199454caecd71f6d7ab41101315bc91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
