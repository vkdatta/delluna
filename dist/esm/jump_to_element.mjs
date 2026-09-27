export const name="jump_to_element";
export const id="dl_adc453e8a51f7a37e7ae";
export const url=new URL("../icons/jump_to_element.svg?v=224803336754a7125201e42f6a1c9e2bff3832fefa54627ec63a43971c1c093b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
