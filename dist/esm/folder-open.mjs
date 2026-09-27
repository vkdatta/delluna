export const name="folder-open";
export const id="dl_a64ec30149124d26a278";
export const url=new URL("../icons/folder-open.svg?v=6cf0acaa0d5bec75bcb78e00a00ac6cc81ee0f09bcc52cf6792d38fe96f130de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
