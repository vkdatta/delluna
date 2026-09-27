export const name="print";
export const id="dl_e08826d44f5a549ae0d6";
export const url=new URL("../icons/print.svg?v=16d1939243544647111a38825545b0bb0b80351ba859cf5b73f78ee1a04d2d35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
