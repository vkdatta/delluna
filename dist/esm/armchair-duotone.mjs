export const name="armchair-duotone";
export const id="dl_8ca89da9bcde43978a0a";
export const url=new URL("../icons/armchair-duotone.svg?v=a236f9ee7d74a546fe7e07dff78c2d326286f0a92ae2b22864babbb8ba50992f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
