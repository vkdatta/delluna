export const name="treasure-chest";
export const id="dl_d0c63545f2f69be9642a";
export const url=new URL("../icons/treasure-chest.svg?v=ecb9031f2401106fac5d636fb0bf9bcc5bd195efe20b19ced6cc0d361c42f646",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
