export const name="handbag-bold";
export const id="dl_8b4327530196404bb264";
export const url=new URL("../icons/handbag-bold.svg?v=f1656a2751419d16d37df4ba5595479113c9955bf99de788e7a2210d5ba5b127",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
