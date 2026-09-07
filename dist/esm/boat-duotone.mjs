export const name="boat-duotone";
export const id="dl_b3dc094813b3487b8ec0";
export const url=new URL("../icons/boat-duotone.svg?v=7bd915bf21cea3654e57c2ecb9b3a95b3b59e607a43ea82bcd5fb793c15ee40c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
