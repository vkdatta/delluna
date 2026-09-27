export const name="stacks";
export const id="dl_d8764b6e5fcedf1c85fd";
export const url=new URL("../icons/stacks.svg?v=c220bafc1374e8066f740fd9d4311b6427352e59ccf817f28b927e5f4e14d5a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
