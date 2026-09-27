export const name="mobile_arrow_down-fill";
export const id="dl_0fe0867e92f7e21b4b9b";
export const url=new URL("../icons/mobile_arrow_down-fill.svg?v=27c50d40b790bebfb2907f23e02bc2749dc5fd2fd9d0c74cdc5b6067d8ca842d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
