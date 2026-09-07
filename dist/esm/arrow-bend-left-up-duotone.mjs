export const name="arrow-bend-left-up-duotone";
export const id="dl_9555bf0df26c42288f58";
export const url=new URL("../icons/arrow-bend-left-up-duotone.svg?v=73e26e1cbc21c12a07626aa80b7fcf8826e2b99f528d563ae5a18bd13a3a9ec6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
