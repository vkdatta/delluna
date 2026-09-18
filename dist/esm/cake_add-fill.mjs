export const name="cake_add-fill";
export const id="dl_711f01e071714fadb882";
export const url=new URL("../icons/cake_add-fill.svg?v=9b163df7a1135987498305725e4d7851bfe6d2df374c92c13ef18f398f18b0a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
