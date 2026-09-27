export const name="number-square-four-duotone";
export const id="dl_6895ddd064d341ffa193";
export const url=new URL("../icons/number-square-four-duotone.svg?v=bf2822de728601b37be657889181bfac2c27f8283aad19296470c4ccb31f831a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
