export const name="toll";
export const id="dl_a6940f7a7bb6027c0538";
export const url=new URL("../icons/toll.svg?v=b2601d825aa2ff959ffeba011c0190fe9d73015eb1f2a78c4a4f104928d18975",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
