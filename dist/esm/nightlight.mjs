export const name="nightlight";
export const id="dl_d0c8fecfe5b74781a557";
export const url=new URL("../icons/nightlight.svg?v=fac66cacffb0fe390228c17cc542ed1c847380cebd899dcfe185fb129cecd93c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
