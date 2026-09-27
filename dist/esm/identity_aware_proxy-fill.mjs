export const name="identity_aware_proxy-fill";
export const id="dl_68fd7df585de8e66618a";
export const url=new URL("../icons/identity_aware_proxy-fill.svg?v=05a49f04168aa20a2c72ac70f4c515c97d23df05afe27e91ebe73555f0ea5d5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
