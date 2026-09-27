export const name="contrast_square-fill";
export const id="dl_5d78de688cbfa72afc49";
export const url=new URL("../icons/contrast_square-fill.svg?v=2c272ab8547a94c2ae19b8a6de1285e6f0423410e282bb133ecd992086b1d48e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
