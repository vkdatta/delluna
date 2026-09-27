export const name="electrical_services-fill";
export const id="dl_a39e2439fdc56baee14b";
export const url=new URL("../icons/electrical_services-fill.svg?v=1f0b1e4e71fc001a0f27eae51bedf94e33e818da22bd8f5810fbd9c69a24f2f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
