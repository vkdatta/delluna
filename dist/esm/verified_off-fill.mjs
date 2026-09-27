export const name="verified_off-fill";
export const id="dl_463d6939367ec1f7ad42";
export const url=new URL("../icons/verified_off-fill.svg?v=0ded5543a51efb29550d7e1643604be3144bdc165ae0e411b89112dee71b3039",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
