export const name="invoice-thin";
export const id="dl_d3ac2924817541e38f6e";
export const url=new URL("../icons/invoice-thin.svg?v=4d7fb2cfa99b6449baa2d739cdd47e0450cb899088affb1d2d5aea3169c2d9ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
