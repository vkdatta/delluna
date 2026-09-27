export const name="60fps";
export const id="dl_9f2175bd0e186c7ef2b2";
export const url=new URL("../icons/60fps.svg?v=c18a4bd80c4653081bdbff3bef7fef8a7c93d5919b462b5c1ee3a156900294a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
