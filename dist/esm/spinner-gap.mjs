export const name="spinner-gap";
export const id="dl_83b204172052a82ff42c";
export const url=new URL("../icons/spinner-gap.svg?v=ad1ce6c1780f0442ac1af0c227a1c8db94a315dd31b0f9a342db81873f85ff81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
