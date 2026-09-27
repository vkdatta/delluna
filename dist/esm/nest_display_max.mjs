export const name="nest_display_max";
export const id="dl_214dcd0cf25e7fe342f5";
export const url=new URL("../icons/nest_display_max.svg?v=95a0b5e5cab62f50f9f468c3bab50af15aeb51465e6b8db92e82564cf741e3f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
