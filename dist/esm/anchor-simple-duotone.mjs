export const name="anchor-simple-duotone";
export const id="dl_bf5e36db81f54f309a56";
export const url=new URL("../icons/anchor-simple-duotone.svg?v=2997901b4ebd25387d0f086c5c83557ec0f0a2bf626d0fc28105cae5e13568df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
