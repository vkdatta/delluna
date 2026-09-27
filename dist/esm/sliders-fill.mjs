export const name="sliders-fill";
export const id="dl_4648ea6b61e6380faed3";
export const url=new URL("../icons/sliders-fill.svg?v=e3e9e0307d1dc5907f542fcd5e1430d0e539e1293cf1954e1db29a1174ce6a01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
