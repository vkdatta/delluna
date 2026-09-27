export const name="highlight-fill";
export const id="dl_f0cf64763cf6dfea577f";
export const url=new URL("../icons/highlight-fill.svg?v=6fb8c20d5febbe6fdd66ee39826d106b4fcc3907853350b13f99583e095864a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
