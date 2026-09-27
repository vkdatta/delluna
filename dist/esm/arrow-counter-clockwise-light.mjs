export const name="arrow-counter-clockwise-light";
export const id="dl_2563cc043f7c48d7b213";
export const url=new URL("../icons/arrow-counter-clockwise-light.svg?v=5198b261dac1b72684925c71cb421bc66e14b02b128d7a12000948919197a6c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
