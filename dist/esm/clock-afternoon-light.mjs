export const name="clock-afternoon-light";
export const id="dl_29d23494d4f242b5a347";
export const url=new URL("../icons/clock-afternoon-light.svg?v=52d1389b6d3e59a4084c68a7be6a72a282426826ff40722e07d475e2c1d61c7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
