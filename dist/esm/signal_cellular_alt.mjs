export const name="signal_cellular_alt";
export const id="dl_f9531c9d2b498e0dd62e";
export const url=new URL("../icons/signal_cellular_alt.svg?v=0a6dd564bb526f2cab6e499cf555402afb72a70120c159561e44f927c1033511",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
