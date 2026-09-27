export const name="inactive_order";
export const id="dl_ad1730c6f0c350cfd0d5";
export const url=new URL("../icons/inactive_order.svg?v=849916fab94d7d52dfc4942ab61cfbde4ddcd43743fef516f197936c2b0600d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
