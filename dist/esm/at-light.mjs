export const name="at-light";
export const id="dl_4d67ffc32d7c47588482";
export const url=new URL("../icons/at-light.svg?v=e484a664a82794d1b8973bc75997916811f9472afe258587ac6fe9e90eb5003e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
