export const name="javascript";
export const id="dl_7ec27b895b2c49792edc";
export const url=new URL("../icons/javascript.svg?v=06b177676a46b1bee8e01681b71673b04b34effc6c935249e40d25d23c3fac7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
