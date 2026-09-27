export const name="wave-square";
export const id="dl_16cae201e6fa6131222c";
export const url=new URL("../icons/wave-square.svg?v=dea8fdfcc71b73762493455aa5ead600055e24d7772250447431c9347c8b2c67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
