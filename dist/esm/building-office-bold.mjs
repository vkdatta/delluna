export const name="building-office-bold";
export const id="dl_50eda555309d48218a47";
export const url=new URL("../icons/building-office-bold.svg?v=b7a3cbcce248290e4bc11385c44bbeacddba29805d1b710f755be64d629ab832",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
