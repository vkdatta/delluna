export const name="more_down-fill";
export const id="dl_2b065cacf0b7cf88dbf8";
export const url=new URL("../icons/more_down-fill.svg?v=548bbf475568baaf4b0b3c0098f0cdc351cc6aa4ad61d62d5e89966770195515",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
