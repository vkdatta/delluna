export const name="test-tube-fill";
export const id="dl_e95390c342e8d2b33a01";
export const url=new URL("../icons/test-tube-fill.svg?v=32b6bd63bbfb91059562e60e628172c0c834c2eeb85284b94a5987b0d8ad4da9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
