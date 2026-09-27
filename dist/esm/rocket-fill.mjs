export const name="rocket-fill";
export const id="dl_1ebe319f5fd04e8aba1c";
export const url=new URL("../icons/rocket-fill.svg?v=39ccc1a8a316e889392d9e981c86a49d63a67619299be5c84898cadf391b3287",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
