export const name="number-one-bold";
export const id="dl_fbddd952e60c4dcb91f1";
export const url=new URL("../icons/number-one-bold.svg?v=22e09da78929682f4030236395bf6e75d3efcf7376a61c46c99b2c6a9a3bd212",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
