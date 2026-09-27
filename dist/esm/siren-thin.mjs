export const name="siren-thin";
export const id="dl_23ed971acc53c9eaefdc";
export const url=new URL("../icons/siren-thin.svg?v=2b8b4e63288f57167e8174650d4038087d1422a7510fc5ea65d1f49538a79c24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
