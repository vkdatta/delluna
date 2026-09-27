export const name="schema";
export const id="dl_b495ff5e484fa46c6b90";
export const url=new URL("../icons/schema.svg?v=bf7f707f0247fff6ee54e6403d8b27e6808b5a246361031700818f5e8c9217a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
