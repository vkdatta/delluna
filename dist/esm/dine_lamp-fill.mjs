export const name="dine_lamp-fill";
export const id="dl_3ae3364a6db371620296";
export const url=new URL("../icons/dine_lamp-fill.svg?v=c353239f6b5f13b2bfc04cfea442518765032df6f5fbfaf2ad9598254eb66799",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
