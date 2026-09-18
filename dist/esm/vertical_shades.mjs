export const name="vertical_shades";
export const id="dl_bed73ab414494ce982b0";
export const url=new URL("../icons/V/vertical_shades.svg?v=8e2c8430a96686db8b111056dfb7a3736503f6b059c2f2e47349172f93a0b98c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
