export const name="crosshair";
export const id="dl_b89a97b539f54f86a9b3";
export const url=new URL("../icons/crosshair.svg?v=c67106293edf30ae075fcff13042179a201afc4b9f1abd4ed541000507de3cc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
