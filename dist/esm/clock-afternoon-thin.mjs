export const name="clock-afternoon-thin";
export const id="dl_0b83a7e17dac4cec895e";
export const url=new URL("../icons/clock-afternoon-thin.svg?v=1ebd455a7c2eccac11f4d8d46dba9717676ffece1f2ac452b6510c288fb2e1b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
