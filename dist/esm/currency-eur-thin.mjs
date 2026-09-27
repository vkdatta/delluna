export const name="currency-eur-thin";
export const id="dl_0f6ebe4062e944c3b232";
export const url=new URL("../icons/currency-eur-thin.svg?v=e926084d3a0a9c85acaacd2ad9b44a2db7eecceb81c9357c2aec4f29a9d1bc3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
