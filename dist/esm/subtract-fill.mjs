export const name="subtract-fill";
export const id="dl_c688378fc9401c91f9ad";
export const url=new URL("../icons/subtract-fill.svg?v=7dbd189017883f7bdb0d04801f24b4dc82fb3fb411adb53cf9da0e22183610bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
