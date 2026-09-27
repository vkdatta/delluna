export const name="currency-circle-dollar-thin";
export const id="dl_7630be6ca39841cd9ee6";
export const url=new URL("../icons/currency-circle-dollar-thin.svg?v=782f0b1534796866c33f6859ede5d9d6472a9b313bd2184b781a4d5f2a8990d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
