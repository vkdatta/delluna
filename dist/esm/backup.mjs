export const name="backup";
export const id="dl_4c9fcfa9880a4c3c9114";
export const url=new URL("../icons/B/backup.svg?v=929aa724900db4e506cf3bbcbef0359f937c84e64f463305ab82d527c955dea5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
