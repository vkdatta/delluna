export const name="grok";
export const id="dl_6fac0284ee3993248c2d";
export const url=new URL("../icons/grok.svg?v=45060e29b73344d922c9f0420d4d16ae0002aec87ba0eda8db372508bc5352a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
