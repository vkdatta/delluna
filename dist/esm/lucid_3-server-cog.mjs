export const name="lucid_3-server-cog";
export const id="dl_01aa965cc8f64000a505";
export const url=new URL("../icons/lucid_3-server-cog.svg?v=350cd2a1820d607a6d0f129ec82e9569e59afe4d729fd79e2dcd47908e828557",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
