export const name="ice-cream-duotone";
export const id="dl_940ec24486af4a50b9f4";
export const url=new URL("../icons/ice-cream-duotone.svg?v=426e9a40906f9be0e26552a53a3f23549796e1bba0a20e16eddcb6ea0a224095",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
