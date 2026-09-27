export const name="inbox-fill";
export const id="dl_e56c6da588a81d98241d";
export const url=new URL("../icons/inbox-fill.svg?v=db60c1918214fe6a32c465dbdfdb3e2ec502762ae900f3d5b2283e50dc58102c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
