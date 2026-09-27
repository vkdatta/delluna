export const name="link-simple-horizontal-duotone";
export const id="dl_679ab837c7004f1bb077";
export const url=new URL("../icons/link-simple-horizontal-duotone.svg?v=e7f40b0c6049e77748d8a56d79f99e50d738bffe899a339956b58aa30942b82d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
