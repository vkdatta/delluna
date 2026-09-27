export const name="plus-circle-duotone";
export const id="dl_5754bcde7caf4891b9c3";
export const url=new URL("../icons/plus-circle-duotone.svg?v=db7343e6d215eb8c9e6ebe2b7c0e2f922a70e5a6c151112460bb1f2c9870dc59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
