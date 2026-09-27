export const name="wave-triangle-fill";
export const id="dl_ca57610ee99cd8fb87f1";
export const url=new URL("../icons/wave-triangle-fill.svg?v=a1af40ddecbe2f5f6df7516cb661ed3788b11b13ce8710ac4b1e5e5282850926",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
