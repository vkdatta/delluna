export const name="tote-simple-duotone";
export const id="dl_6ff7db75d4801ab5245d";
export const url=new URL("../icons/tote-simple-duotone.svg?v=d7d12b9e49e3fae93b9b86300f59969a4dd3c817be2ca12dade09a9a37f4a2a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
