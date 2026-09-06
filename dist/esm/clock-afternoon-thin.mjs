export const name="clock-afternoon-thin";
export const id="dl_0b83a7e17dac4cec895e";
export const url=new URL("../icons/clock-afternoon-thin.svg?v=e308bd90341fa4ecc9598caafb2784b362f43e68f811fdb2dbe02a11df06dd36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
