export const name="bottom_navigation";
export const id="dl_f7a7abe0818a4afda777";
export const url=new URL("../icons/bottom_navigation.svg?v=35697f87b65f5e1224ff7346d3c9821e20cd6b0097bb7b7a974f95a91a59111d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
