export const name="boules-bold";
export const id="dl_faa34ae77c5244abbf3a";
export const url=new URL("../icons/boules-bold.svg?v=f3480382fdd2e3205a89730fb55f6a2626d7eee552d4544da545fef81c8ccbb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
