export const name="unknown_5-fill";
export const id="dl_6d128ee18e8a4deabe9f";
export const url=new URL("../icons/unknown_5-fill.svg?v=25279b3f0572dfe2464b732aa1c932d91e03b430a6bbd23a8a269fdcde4e29f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
