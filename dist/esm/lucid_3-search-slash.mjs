export const name="lucid_3-search-slash";
export const id="dl_7ee37ef433204603bff4";
export const url=new URL("../icons/lucid_3-search-slash.svg?v=f2ad0899a560ab53b8253e004fa6ec2f2be42fbd532e9b541a78d4f1cef51c8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
