export const name="filter_alt";
export const id="dl_4e78d0a671c7c828cbc4";
export const url=new URL("../icons/filter_alt.svg?v=d89a086902cd85007b2f0afec239497e3e23cbe70186bd4f3c1c0f250d0d0841",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
