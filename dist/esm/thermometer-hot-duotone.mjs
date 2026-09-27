export const name="thermometer-hot-duotone";
export const id="dl_855d6e059f621260273b";
export const url=new URL("../icons/thermometer-hot-duotone.svg?v=f64a3843edd919b5a713a8393f7411cf6923290df967c54ad8d5dfd6d53e986a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
