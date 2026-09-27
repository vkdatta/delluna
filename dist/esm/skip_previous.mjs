export const name="skip_previous";
export const id="dl_ae8f1f400649e8ec0c9c";
export const url=new URL("../icons/skip_previous.svg?v=bbc86c6dda8a9c107aa06c9c7d597587f7cb0142e2c7a160f3f62e4d3626b907",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
