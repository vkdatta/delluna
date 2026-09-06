export const name="lucid_3-sliders-vertical";
export const id="dl_da942087129b419a81a4";
export const url=new URL("../icons/lucid_3-sliders-vertical.svg?v=6f3d117bed540d34f3a92050be8ad14ace729a84b991f4994c08399eab7ce60f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
