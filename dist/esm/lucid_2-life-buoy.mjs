export const name="lucid_2-life-buoy";
export const id="dl_0b106b6272184cfbbd72";
export const url=new URL("../icons/lucid_2-life-buoy.svg?v=221f0d28316b496527d7e5cb0a66346333c795a8006f229bbf7f6714316f1f86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
