export const name="genetics-fill";
export const id="dl_6292628fbd117d4c3494";
export const url=new URL("../icons/genetics-fill.svg?v=3bcfcca063427d2e248e1c0a5d5e31a96d01e290e4bd7f7cb1419cf827307ccb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
