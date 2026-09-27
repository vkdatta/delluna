export const name="lucid_2-mails";
export const id="dl_108ae11a80504667ab4f";
export const url=new URL("../icons/lucid_2-mails.svg?v=f5eb4de4480d4e7f6fe3bccec0ae76d37632f290d02761685b7e14a272ecec7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
