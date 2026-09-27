export const name="jar-label-light";
export const id="dl_63132691661c471994ca";
export const url=new URL("../icons/jar-label-light.svg?v=9d6b6d64776f4928a107984f563127c7ecfd47d47445290399775f2b9b201a29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
