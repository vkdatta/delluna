export const name="eyeglasses_2";
export const id="dl_b1862c0ce442055da0ef";
export const url=new URL("../icons/eyeglasses_2.svg?v=e33b911ef19df1ec1e808c3e5887fd3e93c6edb962035849fd81bc2b5a33d095",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
