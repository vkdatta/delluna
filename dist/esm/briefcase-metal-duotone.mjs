export const name="briefcase-metal-duotone";
export const id="dl_3bd2ef23f78c448caf3b";
export const url=new URL("../icons/briefcase-metal-duotone.svg?v=05178835a9beb87958fe13ba221a179b3dab7e057fed465aaf94bea70410db88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
