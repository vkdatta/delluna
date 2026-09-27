export const name="arrow_circle_down-fill";
export const id="dl_3fd2fe44c8f8b9b94ac4";
export const url=new URL("../icons/arrow_circle_down-fill.svg?v=ffb9f5fd30fcc3767fb4beb932ade05adc182ef380a04b43cda6e394693c9b31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
