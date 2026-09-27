export const name="lucid_2-folder-archive";
export const id="dl_9bc99d87b9b94b76ac94";
export const url=new URL("../icons/lucid_2-folder-archive.svg?v=d249d12d947ec5765ad7e59160f1a4bd755990452d98510382a3b089c47c2b89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
