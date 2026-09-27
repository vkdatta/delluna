export const name="text-subscript";
export const id="dl_2bdcabe0c36f49c23321";
export const url=new URL("../icons/text-subscript.svg?v=1f2fd4cb7a68b9caf8da1468407092535e698afa3058bf05ba38dc8c7296e0b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
