export const name="battery-medium-duotone";
export const id="dl_ec76e9e6ee0b403f87e1";
export const url=new URL("../icons/battery-medium-duotone.svg?v=77d4e06130e0849011b818386c62bbcd67e29b641ed64cd75aa0f5a835cdfd9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
