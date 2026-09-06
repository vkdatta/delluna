export const name="receipt-x-duotone";
export const id="dl_1a1c7ec6fb274a4e92a8";
export const url=new URL("../icons/receipt-x-duotone.svg?v=5103c9aa5da04c1f0664d24f5c1046574f6067543d6f7b8113c8de2f7310bd52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
