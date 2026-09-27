export const name="bell-slash-fill";
export const id="dl_26712cd2e3cc429ea93b";
export const url=new URL("../icons/bell-slash-fill.svg?v=c3506d8a8e1e2f43f9f3d8e7d6c3ca93dcb2f688af880522e97ef431cfdb5f2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
