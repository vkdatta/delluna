export const name="flood-fill";
export const id="dl_e24ad5bfe2fa5a3851d7";
export const url=new URL("../icons/flood-fill.svg?v=35e2ca57118d615fa5128e3e6d84e1cecf13cd774ac9d84325d8de3566fc2b5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
