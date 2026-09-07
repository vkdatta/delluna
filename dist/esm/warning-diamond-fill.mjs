export const name="warning-diamond-fill";
export const id="dl_699c183962bd488a8b51";
export const url=new URL("../icons/W/warning-diamond-fill.svg?v=cdb242310ba434b557be0ea1b7fa1cc72b0a7122cfb953d49c379db9270cac9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
