export const name="iframe";
export const id="dl_8757165eeafb4744bdc4";
export const url=new URL("../icons/iframe.svg?v=d317619350dfecc0d2a5ec1f511ace9ea15f3b32e62649f0b698110a48b5da80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
