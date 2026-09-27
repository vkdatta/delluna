export const name="text-italic-light";
export const id="dl_52eeafbae6d2ad423129";
export const url=new URL("../icons/text-italic-light.svg?v=20d292e49b36e1e311be23a10a220c4bb64cfaf80109e676b6e97af07815a82b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
