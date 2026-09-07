export const name="blueprint-light";
export const id="dl_d3a35b537dca4be7ae23";
export const url=new URL("../icons/blueprint-light.svg?v=3aacf76eff7ca7a0e4cccd485d2c9ecc9767386c7548886c528d85a3f1b9e052",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
