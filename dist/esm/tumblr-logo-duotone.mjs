export const name="tumblr-logo-duotone";
export const id="dl_ea3feb304f08ca12d2de";
export const url=new URL("../icons/tumblr-logo-duotone.svg?v=a22b8436f88beb4655d239777b6531ba10365b071a5d5d2eefd4e8cf6acbcc3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
