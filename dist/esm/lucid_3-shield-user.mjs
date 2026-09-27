export const name="lucid_3-shield-user";
export const id="dl_899354618b974e26b2b4";
export const url=new URL("../icons/lucid_3-shield-user.svg?v=805ff511122dd35906bfe503f7827ab7c355f4e79f2d041702832307fe043667",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
