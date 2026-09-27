export const name="overview_key-fill";
export const id="dl_1dc9ce9da4e16a566f6e";
export const url=new URL("../icons/overview_key-fill.svg?v=177aadeb19a7fa94302c6f380380588d5ec45c8fb99cb0f74c5c9f4f475d37ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
