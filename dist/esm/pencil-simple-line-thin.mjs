export const name="pencil-simple-line-thin";
export const id="dl_276208f3e290453db1ff";
export const url=new URL("../icons/pencil-simple-line-thin.svg?v=82b9445fa77087a981ad723bc6d42f6e85edf4fe32890b68badd60a0882acc2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
