export const name="remove_moderator";
export const id="dl_7b45c624d430948f795e";
export const url=new URL("../icons/remove_moderator.svg?v=df3d5ec5ec87c89f88c76147a962785896362912266ec0d2721cacd1a25c6831",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
