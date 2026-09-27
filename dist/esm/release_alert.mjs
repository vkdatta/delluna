export const name="release_alert";
export const id="dl_0d675536fe7ff5e2a479";
export const url=new URL("../icons/release_alert.svg?v=90ddf3fd06bcc0f6d86b5bc3a0e2717cc0f3cbd2fb54b8b41e17c62348d6b948",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
