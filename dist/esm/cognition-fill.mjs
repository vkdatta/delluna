export const name="cognition-fill";
export const id="dl_9e8f150603a7464389da";
export const url=new URL("../icons/C/cognition-fill.svg?v=c831b32f035117f291b34476aa63449120ae822f1e094d179a7f2fa23c08ecc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
