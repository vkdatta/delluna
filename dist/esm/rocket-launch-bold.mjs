export const name="rocket-launch-bold";
export const id="dl_7807aaa9ad1c46fdb082";
export const url=new URL("../icons/rocket-launch-bold.svg?v=bcc079a81ed155289b2b071cc1b0691e06b18ed0459fb0764d3cddda15dacb16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
