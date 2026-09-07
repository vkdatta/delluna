export const name="sailboat";
export const id="dl_7f1cb16d9797431199d2";
export const url=new URL("../icons/S/sailboat.svg?v=ec226d4bb68a0de2a3682c43617e4d686a9f10a97fda8975b6b615d514ec5268",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
