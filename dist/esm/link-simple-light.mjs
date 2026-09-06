export const name="link-simple-light";
export const id="dl_82be94ab915c457a8c13";
export const url=new URL("../icons/link-simple-light.svg?v=8cdacfa44b266c4bcfb2603141d546ffcfef8f66332e248bdbb8267ee0c931cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
