export const name="markunread_mailbox";
export const id="dl_5b9012f390244888adac";
export const url=new URL("../icons/markunread_mailbox.svg?v=d2475e4ca8b06f38b8248d2421ad3ed1576ec05f559dc10b76fca58685185b40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
