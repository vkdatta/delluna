export const name="clock-afternoon-thin";
export const id="dl_0b83a7e17dac4cec895e";
export const url=new URL("../icons/clock-afternoon-thin.svg?v=6c8e2bf230ddea8b6b425ba2b33f7c9505ba0b37f6c51618a0d9f3b937f2ba32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
