export const name="arrow-fat-right-fill";
export const id="dl_0b0d703745964699ae78";
export const url=new URL("../icons/arrow-fat-right-fill.svg?v=f330e87875c2dc47a590deff64074006fe8c486c406f024985b63b5874f46fef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
