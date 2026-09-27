export const name="skype-logo";
export const id="dl_2f2f5af9fd6f63d372c5";
export const url=new URL("../icons/skype-logo.svg?v=5f27d67634a36dd7350e31b70a1e80743768809ca272fcaf94f2f63803984bd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
