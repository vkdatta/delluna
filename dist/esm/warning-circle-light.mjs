export const name="warning-circle-light";
export const id="dl_4c6f4603473a4404a535";
export const url=new URL("../icons/W/warning-circle-light.svg?v=1ada6a2b4af0a50a0fa9d67e8c4325c4dedec934b3c7ec815eeb37af94df4b53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
