export const name="policy_alert";
export const id="dl_83f431dbbc06a1e9b105";
export const url=new URL("../icons/policy_alert.svg?v=3d011611843d5345f42dbaa63fb2539f148a6b98d5f77bb200ccd1130f222ee1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
