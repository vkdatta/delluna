export const name="list-checks-fill";
export const id="dl_dccadb40aa7b49b196e8";
export const url=new URL("../icons/list-checks-fill.svg?v=eefe95747f02e0aa9f183c75aac7ffdf87f69317cd775c383a606344cc7c78ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
