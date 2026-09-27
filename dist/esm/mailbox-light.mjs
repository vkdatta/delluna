export const name="mailbox-light";
export const id="dl_232935cf031a458998a5";
export const url=new URL("../icons/mailbox-light.svg?v=d63b95c952dbaeee1a18b56a2cc016a7eaa7fe0983b676e86ee4618c25e7184a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
