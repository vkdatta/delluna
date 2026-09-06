export const name="moon-stars-duotone";
export const id="dl_163252f004104763ab82";
export const url=new URL("../icons/moon-stars-duotone.svg?v=05463280716f6ec28485c0ef4c25417f5d0f857ba635c3e011daabaa358f0984",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
