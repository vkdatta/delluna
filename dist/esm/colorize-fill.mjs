export const name="colorize-fill";
export const id="dl_07f15b607309e658f61f";
export const url=new URL("../icons/colorize-fill.svg?v=612c80a03203bff0b781a19d5631eb7adc25a7089453dea689aacc6179803f6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
