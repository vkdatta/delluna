export const name="broadcast-light";
export const id="dl_c80aa08f9b83491fbf68";
export const url=new URL("../icons/broadcast-light.svg?v=7bcd5e980e2c754b3428fc51ecea3fc88e8587d17a4cf2eb95a368773a245768",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
