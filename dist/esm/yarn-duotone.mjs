export const name="yarn-duotone";
export const id="dl_2b5a6c70584d28f1eea1";
export const url=new URL("../icons/yarn-duotone.svg?v=132428698179eeb8f202724af11681c928e37c819a14845d0567014b29b10523",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
