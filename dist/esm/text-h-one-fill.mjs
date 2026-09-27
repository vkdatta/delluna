export const name="text-h-one-fill";
export const id="dl_e5589018920a04f5ef09";
export const url=new URL("../icons/text-h-one-fill.svg?v=85f21b83a1a5752459825b4b8dbe44c4240fd18fe36eca16da02c46645ddf7e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
