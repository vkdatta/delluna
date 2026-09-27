export const name="lucid_3-scan-text";
export const id="dl_ac67c393baad4d29866f";
export const url=new URL("../icons/lucid_3-scan-text.svg?v=4e2e8be206f9a6235b6899d8c5419307907a19d365e8d37b1e87c4da36470d3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
