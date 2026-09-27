export const name="lighthouse-light";
export const id="dl_9a91adc80d0e471b89bb";
export const url=new URL("../icons/lighthouse-light.svg?v=7633ed54dd5817a32f2d50b05cf1d78a01766c1faa465274c63a98c27318e6c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
