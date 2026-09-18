export const name="scale";
export const id="dl_26350a8062a14bc9b01e";
export const url=new URL("../icons/scale.svg?v=5daa9bea58c03353c36c3c4d2f5f4b9fe519d48f5577206544c23c94d19a1654",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
