export const name="first-aid-kit-light";
export const id="dl_c664b610e9ef48e698c3";
export const url=new URL("../icons/first-aid-kit-light.svg?v=2a59cf751cd2407bc75c443adcaf8b2e0f52ba6158d8c6a7aaacb7ba913279ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
