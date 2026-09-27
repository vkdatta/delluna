export const name="amazon-logo";
export const id="dl_c3a71e06398e4daa876b";
export const url=new URL("../icons/amazon-logo.svg?v=92264a692063459f3f7a5264c35612501d4174d773db342ed4aa90aef62130bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
