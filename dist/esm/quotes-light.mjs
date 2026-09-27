export const name="quotes-light";
export const id="dl_e8c1ec4ebf2946259493";
export const url=new URL("../icons/quotes-light.svg?v=a257c516fa3f4ec71cf8747bbe75c2c147ed7452f8e9e3b2efa04e03a180d1e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
