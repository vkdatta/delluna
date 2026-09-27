export const name="stack-light";
export const id="dl_fec8314bf2c6497e6fb5";
export const url=new URL("../icons/stack-light.svg?v=044b69b51f908d4bbe9ec186ea90fc54946b7584d4350b9153133fb6ee192c3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
