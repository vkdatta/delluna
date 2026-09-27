export const name="screencast-fill";
export const id="dl_6f851761e812e9fe2e84";
export const url=new URL("../icons/screencast-fill.svg?v=22945b174d13eff685455c9801aca918d17f71963909f5bebe522b342b68563b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
