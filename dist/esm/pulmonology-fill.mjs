export const name="pulmonology-fill";
export const id="dl_639262d2875e17c23c43";
export const url=new URL("../icons/pulmonology-fill.svg?v=cc354a40898e1f9889b423119264c0243be51f99869c87c602c29d5789692d34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
