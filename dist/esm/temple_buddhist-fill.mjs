export const name="temple_buddhist-fill";
export const id="dl_c8df4811d92917399597";
export const url=new URL("../icons/temple_buddhist-fill.svg?v=c85bfefc4577e1bfa68a4191fcccef4fe08b40eb0c32cc030ebf22c94f6faedb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
