export const name="onigiri-duotone";
export const id="dl_bebaf857f03e41448eb6";
export const url=new URL("../icons/onigiri-duotone.svg?v=7f87d5dcdc4794f9af9cf76dcc6416a2c5a9d14213767be88bce7ba06c51f481",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
