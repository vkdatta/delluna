export const name="text-h-one-light";
export const id="dl_0f99c6f450214ec5a687";
export const url=new URL("../icons/T/text-h-one-light.svg?v=2a9867d6ac6cb4ddaa3cee39250ad1d37cbc68cbf310d191ab6d687065452a92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
