export const name="nut-light";
export const id="dl_0ee4a7ee787e44edaf56";
export const url=new URL("../icons/nut-light.svg?v=a58c2112e99fba153fb8afaf24ace23c3d2cf50151f54621b883f50d8aa50a0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
