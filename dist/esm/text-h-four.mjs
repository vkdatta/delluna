export const name="text-h-four";
export const id="dl_2a436e82118a46cfbb0f";
export const url=new URL("../icons/T/text-h-four.svg?v=f309c432311eca7fb33be8e6222a8717600c91568a10429a28e56285068d86af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
