export const name="microsoft-excel-logo-thin";
export const id="dl_03a9bb32078c42f09443";
export const url=new URL("../icons/microsoft-excel-logo-thin.svg?v=95c76f7186b8fa88300e7d1139522f7916ec2752984c6c928ccd53e5a271f03a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
