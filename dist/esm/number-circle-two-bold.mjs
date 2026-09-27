export const name="number-circle-two-bold";
export const id="dl_d43e13fc1d3b4c20aa45";
export const url=new URL("../icons/number-circle-two-bold.svg?v=0d39ac72fe6f15075b4139dc83ff00f38f907666e484acd3deadbb6a5be85874",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
