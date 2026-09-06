export const name="recycle-duotone";
export const id="dl_a45729d268b94a14a7ac";
export const url=new URL("../icons/recycle-duotone.svg?v=d62bd80f216a0c76853462192d52d2722e0d664970791b1482a8d423493f0287",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
