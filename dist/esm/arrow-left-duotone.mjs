export const name="arrow-left-duotone";
export const id="dl_2c98246063764a729a49";
export const url=new URL("../icons/arrow-left-duotone.svg?v=3b17abe82467914cbc4c828a0bea863c390c2e05c54eb124f4dbd3eb97495d6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
