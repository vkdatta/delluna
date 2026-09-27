export const name="envelope";
export const id="dl_bd33395556a14141a411";
export const url=new URL("../icons/envelope.svg?v=8851dac50f985865e0843b967cca42a8c907fdfb45a0692ff6730bafdfdc22b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
