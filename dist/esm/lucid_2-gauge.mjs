export const name="lucid_2-gauge";
export const id="dl_5be1daff9e784a7d8e8f";
export const url=new URL("../icons/lucid_2-gauge.svg?v=a70f5670b7d58da645b038cde25d0dbbb282b27cd908fdb2d3fc0c3f0c47769f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
