export const name="lucid_2-flame-kindling";
export const id="dl_ea90aefef1ea4702bb6f";
export const url=new URL("../icons/lucid_2-flame-kindling.svg?v=eb2e618b5f1ffbf0c38f5067aae2db04de9bd58aa535295a6e29e691070e1f6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
