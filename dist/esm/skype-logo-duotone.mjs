export const name="skype-logo-duotone";
export const id="dl_bfab6f6fbce9d5682b5d";
export const url=new URL("../icons/skype-logo-duotone.svg?v=b439ba75c55be590ed4289df55735059e7d8265c0ae50ee195226990df7b8e0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
