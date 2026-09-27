export const name="cancel-fill";
export const id="dl_92a1b71aadee8cce0f63";
export const url=new URL("../icons/cancel-fill.svg?v=e216d6191a37a17b8415bec273111e1743c4a44f562a0ccd72c283c31316736c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
