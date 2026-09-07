export const name="lucid_2-layout-list";
export const id="dl_54af2e24e50344309029";
export const url=new URL("../icons/lucid_2-layout-list.svg?v=d910f8da60d2edc2a30ed9f41002d58199ac3ff47a1f0edf67f8c4f2637b3ebc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
