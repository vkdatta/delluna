export const name="arrow-bend-right-up-duotone";
export const id="dl_fa7364ddb08949b19059";
export const url=new URL("../icons/arrow-bend-right-up-duotone.svg?v=614bb665b22885d2dc4d1a0c084782038fd961e259ac378c39ab6f61b5ea31bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
