export const name="magic-wand-duotone";
export const id="dl_146c05e2923f4521b65c";
export const url=new URL("../icons/magic-wand-duotone.svg?v=5d94478d240db3bddc2bbf7268862fbfe8c0bf6de6436e005cffa85efdfb45c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
