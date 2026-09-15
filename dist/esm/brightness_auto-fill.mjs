export const name="brightness_auto-fill";
export const id="dl_a186743fa73546309126";
export const url=new URL("../icons/B/brightness_auto-fill.svg?v=804e0afc5ad9c3fe1ea92625ee43e42cae5036d22fc8de14c52e7c8cadfc6f27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
