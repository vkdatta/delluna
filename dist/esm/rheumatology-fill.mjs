export const name="rheumatology-fill";
export const id="dl_2c146cd27edefc34cf03";
export const url=new URL("../icons/rheumatology-fill.svg?v=ae0f3b1e75347c93f9303b88064ff88fd611a85d54e6661bbbdc7ba412b80e94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
