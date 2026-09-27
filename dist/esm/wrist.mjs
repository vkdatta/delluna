export const name="wrist";
export const id="dl_87e4d7c5810d076944f0";
export const url=new URL("../icons/wrist.svg?v=889a09701acc6c0667888e93722a7f62df1fe09a21739e44cdca3528527ac194",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
