export const name="arrow-arc-left-duotone";
export const id="dl_cb904af5f28d4b2ab399";
export const url=new URL("../icons/arrow-arc-left-duotone.svg?v=3be38426a131fa6af0c39c127f811c63e4e671cbe647f18d06d51d87b8bc1c78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
