export const name="crib-fill";
export const id="dl_7320495947bc51a00d2b";
export const url=new URL("../icons/crib-fill.svg?v=6e4ba4866b01bed38cadeddc72442fdd8eaf7098bce627b94aeb71417a2a47cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
