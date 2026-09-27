export const name="interactive_space-fill";
export const id="dl_cf14879ffb9bd7b750ad";
export const url=new URL("../icons/interactive_space-fill.svg?v=03dabb915a1e6a78fa7a03d656ce13adc1cf4c80bd937cdf414a3a2e2a89d859",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
