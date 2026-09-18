export const name="space_dashboard_2";
export const id="dl_3cc64ad5b4984f58a8f3";
export const url=new URL("../icons/space_dashboard_2.svg?v=dad1c8f0bf595cabe8c2a509567e5b2fac7784ed67a53e49fa90cf8c2c5e3f92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
