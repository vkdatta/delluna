export const name="caret-circle-double-down-bold";
export const id="dl_19c7200a9b444ae19b63";
export const url=new URL("../icons/caret-circle-double-down-bold.svg?v=cf8eb06e5ef32d35a5be197bda04754dac1d5e299ddee5752a04fcd4fa07c914",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
