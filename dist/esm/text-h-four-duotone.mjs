export const name="text-h-four-duotone";
export const id="dl_8bdfff0cdfe30577dff1";
export const url=new URL("../icons/text-h-four-duotone.svg?v=7a2c8e9dce0c7be2df8744c4cb4e352401081ea86b5bebf0465ca13afefd5db3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
