export const name="cable-car-light";
export const id="dl_2c10030f045f4ce9b53b";
export const url=new URL("../icons/cable-car-light.svg?v=6e1ea2eea4ba3b117f1461d37dd30e60d3ae6f4629111c7c93ed954e2e99ea6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
