export const name="cricket-light";
export const id="dl_9c89764ae32d448dbbd1";
export const url=new URL("../icons/cricket-light.svg?v=1ad7a4090cceead389e964f8d915418a1f6e853d3f2ae72026ce124891fa0e4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
