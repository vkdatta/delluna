export const name="toilet-paper-duotone";
export const id="dl_ef95b86ff095fd94812c";
export const url=new URL("../icons/toilet-paper-duotone.svg?v=0db33786f216fb367bc55ab947192c63bcfc4dd5b4266dcbf1f5bf619002e653",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
