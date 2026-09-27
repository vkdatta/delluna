export const name="messenger-logo-duotone";
export const id="dl_053dde2f7eba4afa92c3";
export const url=new URL("../icons/messenger-logo-duotone.svg?v=4ad6c14fb6c04114d8de94da210fe012d1cca95f08f660d1f64cdb858fc34082",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
