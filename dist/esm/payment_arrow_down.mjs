export const name="payment_arrow_down";
export const id="dl_716fbd469f24a22c00b0";
export const url=new URL("../icons/payment_arrow_down.svg?v=5906451a0e4afa2e641d5fb8c371ab41db040139e2ba624060d027e420d09b14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
