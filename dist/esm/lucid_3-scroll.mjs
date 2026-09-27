export const name="lucid_3-scroll";
export const id="dl_77dff2f7b94e4051b4f6";
export const url=new URL("../icons/lucid_3-scroll.svg?v=82dee2c2def1b0294fbae706f8b4a6284177b955300aad1f5ee3c1ea4ece9362",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
