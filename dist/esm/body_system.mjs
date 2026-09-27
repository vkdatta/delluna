export const name="body_system";
export const id="dl_49bd95381a511c94b281";
export const url=new URL("../icons/body_system.svg?v=d999fd5a2e5f9ba9f5bace98e13f82bba46c129402c23279705838cdc1473751",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
