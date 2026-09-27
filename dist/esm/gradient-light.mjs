export const name="gradient-light";
export const id="dl_9a46f36286e44680a931";
export const url=new URL("../icons/gradient-light.svg?v=b315115b9637094ae843f0642d74fbc0fabd1f96f7d36dc4a1df89aa013e4b94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
