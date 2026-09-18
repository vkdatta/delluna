export const name="partner_reports-fill";
export const id="dl_98474b60fedb44c98238";
export const url=new URL("../icons/partner_reports-fill.svg?v=7b210beab28efc51bfda0482b40b233b50e0f9300bdbdcb5a7672dda0758e207",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
