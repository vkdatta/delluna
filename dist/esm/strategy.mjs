export const name="strategy";
export const id="dl_0f2111f8007e562f6d7c";
export const url=new URL("../icons/strategy.svg?v=72d69374b79ed9d30fa8bc4f755bd19409e1a41037c10cd19cc8d0f1b09a8903",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
