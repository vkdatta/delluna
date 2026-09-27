export const name="clock-countdown-bold";
export const id="dl_87d401be6b5d497d8332";
export const url=new URL("../icons/clock-countdown-bold.svg?v=fec2b7762371fac9f4c4365fb6cd8dba619619a77691d4a6fe44c2f04c5503ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
