export const name="coffee-duotone";
export const id="dl_83c042150f5340aebd88";
export const url=new URL("../icons/coffee-duotone.svg?v=b930b5754fb8b0b2c731a1c403a43c587e0f3f411af50beac8989c5f989b3465",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
