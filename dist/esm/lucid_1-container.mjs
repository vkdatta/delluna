export const name="lucid_1-container";
export const id="dl_3ce83f39d5fd40b991f7";
export const url=new URL("../icons/lucid_1-container.svg?v=add71b8d7e7fff19a6540613196b7258fd2f66993f5e481d94642e58bb8866eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
