export const name="trail_length";
export const id="dl_aaa045934f514a73bf66";
export const url=new URL("../icons/trail_length.svg?v=f143f8cd030d5be72f1e6dc1046675f027ddfb14a2e5ea70fd37909743851354",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
