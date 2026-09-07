export const name="tumblr-logo-duotone";
export const id="dl_cbf3ec2f4ae44e97b7dc";
export const url=new URL("../icons/T/tumblr-logo-duotone.svg?v=8b074eaf5205adefc13522f67dc4a48620443e09b3b4c20e392185ee31bb9cbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
