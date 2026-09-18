export const name="mobile_gear-fill";
export const id="dl_15dcefa841754ffc9ab0";
export const url=new URL("../icons/mobile_gear-fill.svg?v=05f57d7d920f2f6d73336d91d1198167c3b634fcfb6c8ed31c5ca29455d5cbb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
