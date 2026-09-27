export const name="lucid_3-shrimp-off";
export const id="dl_dea801c9f26b4506a1ed";
export const url=new URL("../icons/lucid_3-shrimp-off.svg?v=27520b664e9efd27ce0f31256de9d33860bf573b603dfba89f436f0fb00aaf27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
