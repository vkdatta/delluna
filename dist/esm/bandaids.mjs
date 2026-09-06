export const name="bandaids";
export const id="dl_83c03e3dd8de42079cd8";
export const url=new URL("../icons/bandaids.svg?v=edb8460659ce414178e2e066d08b2d31f875de8c6398ea576b900f1b87edc688",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
