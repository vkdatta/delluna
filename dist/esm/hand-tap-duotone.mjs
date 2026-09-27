export const name="hand-tap-duotone";
export const id="dl_997c20a812124cea8d27";
export const url=new URL("../icons/hand-tap-duotone.svg?v=d90f3f3655abd628f50b455489a42ffc8e1bdd8de31e807640e5c3cd20302e2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
