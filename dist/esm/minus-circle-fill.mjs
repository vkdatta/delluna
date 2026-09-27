export const name="minus-circle-fill";
export const id="dl_8d48ba23883042cca991";
export const url=new URL("../icons/minus-circle-fill.svg?v=c54e5a1586310657330fffcbd5f3eed3f9d29043790411225bff77b7f5442750",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
