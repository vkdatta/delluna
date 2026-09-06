export const name="orange-duotone";
export const id="dl_58dca6f9e1cc437aaf99";
export const url=new URL("../icons/orange-duotone.svg?v=af8b77578f1c0389e21272aba4f26fc007f9965ba02d79c05946d6fa4f3cff15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
