export const name="lucid_1-biohazard";
export const id="dl_4a02d0212b7a4f4f8921";
export const url=new URL("../icons/lucid_1-biohazard.svg?v=888a149e6f3c9211edca087aea2bd0e06675a0c6d0ac73dffb4ea569a99a9780",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
