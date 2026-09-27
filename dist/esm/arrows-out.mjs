export const name="arrows-out";
export const id="dl_fd6d8d9b63c549fa96c3";
export const url=new URL("../icons/arrows-out.svg?v=a165f1e765feb8f3a2b37e3f657513bece129ddb58198fe773059d1354f14860",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
