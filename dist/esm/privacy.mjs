export const name="privacy";
export const id="dl_0ab777817974dd3a681f";
export const url=new URL("../icons/privacy.svg?v=693214dcdf9b20ebe30da1e866dcdb816d4be0c932994ffed8167a8bfc650564",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
