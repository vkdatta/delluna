export const name="lock-key-duotone";
export const id="dl_89822f7fd07a46a383be";
export const url=new URL("../icons/lock-key-duotone.svg?v=d79a8022987ac1738231a34ed7af7ecc79475bce27ca37509ae92b25bcae0f6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
