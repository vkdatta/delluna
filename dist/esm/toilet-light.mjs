export const name="toilet-light";
export const id="dl_bc86b70e6ba9de6b3294";
export const url=new URL("../icons/toilet-light.svg?v=2ef7240eb62cb0233167ddbaee1262714f36924a2a15fbc3c53f7d6467e7e7e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
